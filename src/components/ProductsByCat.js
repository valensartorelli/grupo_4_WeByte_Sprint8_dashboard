//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';

class ProductsByCat extends Component{
    constructor(){
        super()
        this.state ={
            categoryList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje 
    // componentDidMount(){
    //     fetch('http://localhost:3001/api/products')
    //     .then(respuesta =>{
    //         return respuesta.json()
    //     })
    //     .then(products =>{
    //         //console.log(Category)
    //         this.setState({categoryList: products.meta})
    //     })
    //     .catch(error => console.log(error))

    // }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3001/api/products')).json();
        // console.log(props);
        if (props) {
            this.setState({categoryList: props.meta.countByCategory})
            console.log(this.state.categoryList);
        }

    }





    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3 gris">
                            <h6 className="m-0 font-weight-bold text-white titulo">Productos por categoría</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                            
                                {
                                    //console.log(this.state.genresList)
                                    //pregunto si existe primero
                                    this.state.categoryList && this.state.categoryList.length ? this.state.categoryList.map((produc, index)=>{
                                        return <Category  {...produc}  key={index} />
                                    }) : null
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default ProductsByCat;
