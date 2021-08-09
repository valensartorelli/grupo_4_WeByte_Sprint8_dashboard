//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Brand from './Brand';

class ProductsByBrand extends Component{
    constructor(props){
        super(props)
        this.state ={
            metrics:[]
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/products")
            .then(result => result.json())
            .then(result => {


                this.setState({
                    metrics: result.meta.countByBrand
                        

                });
            })
    }




    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}					
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3 gris">
                        <h5 className="m-0 font-weight-bold text-white-800">Productos por marca</h5>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    //pregunto si existe primero
                                    this.state.metrics && this.state.metrics.length ? this.state.metrics.map((metric, index)=>{
                                        return <Brand { ...metric } key={index} />
                                    }) : null
                                                                      
                                }
                            </div>
                        </div>
                    </div>
    
    </React.Fragment>
    )
    }
}
export default ProductsByBrand;
