import React, {Component} from 'react';


class LastProduct extends Component{
    constructor(props){
        super(props)
        this.state ={
            lastProd : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje 
    componentDidMount(){
        fetch("http://localhost:3001/api/products/latest")
        .then(result => result.json())
        .then(result => {
          let lastProduct = result.data;
          this.setState({
            lastProd: {
                id: lastProduct.id,
                category: lastProduct.category,
                name: lastProduct.name,
                description: lastProduct.description,
                extended_description: lastProduct.extended_description,
                price: lastProduct.price,
                color: lastProduct.color,
                size: lastProduct.size,
                stock: lastProduct.stock,
                image: lastProduct.image,
                visibility: lastProduct.visibilidad
            }
          })
        })
      }
      componentDidUpdate(){
      }

      masInfo(){
        this.setState({
          state:true
        })
      }
    
      cerrar(){
        this.setState({
          state:false
        })
      }


    render(){
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 gris">
                            <h5 className="m-0 font-weight-bold text-white-800">Último producto cargado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center imgStyle"  style={{overflow: 'hidden'}}>
                                <img className="img-fluid mb-4" style={{width: 100 +'%'}} src={`${this.state.lastProd.image}`} alt={this.state.lastProd.name} />
                            </div>
                            <h3> {this.state.lastProd.name} </h3>
                            <p> {this.state.lastProd.description} </p>
                            
                            { this.state.state ? 
                            <div>
                                <table style={{width: 100 + '%'}}>
                                    <tr>
                                        <td>
                                            <strong>ID: </strong>{this.state.lastProd.id} 
                                        </td>
                                        <td>
                                            <strong>Categoría: </strong>{this.state.lastProd.category}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Color: </strong>{this.state.lastProd.color}
                                        </td>
                                        <td>
                                            <strong>Talle: </strong>{this.state.lastProd.size}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Estado: </strong>{this.state.lastProd.visibility}
                                        </td>
                                        <td>
                                            <strong>Stock: </strong>{this.state.lastProd.stock}
                                        </td>
                                    </tr>
                                    <tr style={{lineHeight:5 + 'px'}}>
                                        <td colSpan="2">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <strong>Mas información: </strong>{this.state.lastProd.extended_description}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <strong>Precio: </strong>${this.state.lastProd.price}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">&nbsp;</td>
                                    </tr>
                                </table>
                            
                           
                        
                            <span onClick={ () => this.cerrar() } rel="nofollow" id="less-info" className="btn btn-success" key="01">Cerrar</span> 
                            </div>
                            : 
                            <span onClick={ () => this.masInfo() } rel="nofollow" id="more-info" className="btn btn-warning" key="02">Más info</span> 
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LastProduct;




