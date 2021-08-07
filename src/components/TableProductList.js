import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableProductList(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de productos"} key='productsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'name', title: 'Nombre'},
                  {prop: 'price', title: 'Precio'},
                  {prop: 'description', title: 'Descripcion'}
                ]} 
                fetch={'http://localhost:3000/api/products/?query={"page":"1","perPage":"4","name":"","description":""}'}
                key={'products'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableProductList;