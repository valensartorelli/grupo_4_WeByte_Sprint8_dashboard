import React, { Component } from 'react';
import Table from './Table'
import BigPanel from './BigPanel'


function Product (){
        return (
            <React.Fragment>         
            {/*<!-- TABLE PRODUCTS LIST -->*/}
            <div className="row margin">
                
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
        </div>
        </React.Fragment>
        );
    }



export default Product;