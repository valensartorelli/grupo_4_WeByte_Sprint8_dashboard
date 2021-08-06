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
                name: lastProduct.name,
                description: lastProduct.description,
                price: lastProduct.price,
                color: lastProduct.color,
                size: lastProduct.size,
                image: lastProduct.image
            }
          })
        })
      }
      componentDidUpdate(){
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
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`${this.state.lastProd.image}`} alt={this.state.lastProd.name} />
                            </div>
                            <h3> {this.state.lastProd.name} </h3>
                            <p> {this.state.lastProd.description} </p>
                            <a className="btn btn-warning" target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LastProduct;




