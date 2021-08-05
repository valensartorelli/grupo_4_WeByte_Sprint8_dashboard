import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'


function Product (){
        return (
            <React.Fragment>         
            {/*<!-- TABLE PRODUCTS LIST -->*/}
            <div className="row">
            <div className="card-body">
            <BigPanel title={"Listado de productos"} key='productsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'name', title: 'Nombre'},
                  {prop: 'price', title: 'Precio'},
                  {prop: 'description', title: 'Descripcion'}
                ]} 
                fetch={'http://localhost:3001/api/products/?query={"page":"1","perPage":"4","name":"","description":""}'}
                key={'products'}
                />
        </BigPanel>
        <BigPanel title={"Listado de usuarios"} key={'usersPanel'}>
              <Table 
                heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'firstName', title: 'Nombre'},
                  {prop: 'lastName', title: 'Apellido'},
                  {prop: 'email', title: 'Correo'},
                ]} 
                fetch={'http://localhost:3001/api/users/?query={"page":"1","perPage":"2","firstName":"","lastName":"","email":""}'}
                key={'users'}
              />
              </BigPanel> 
        </div>

        </div>
        </React.Fragment>
        );
    }



export default Product;