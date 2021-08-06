//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Genre from './Genre';

class ProductsByCat extends Component{
    constructor(){
        super()
        this.state ={
            usersList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje 
    componentDidMount(){
        fetch('http://localhost:3001/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            //console.log(genres)
            this.setState({usersList: users.data})
        })
        .catch(error => console.log(error))

    }


    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Productos por categoría</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {/* {
                                    //console.log(this.state.genresList)
                                    this.state.usersList.map((user,index)=>{
                                        return  <Genre  {...user}  key={index} />
                                    })
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default ProductsByCat;
