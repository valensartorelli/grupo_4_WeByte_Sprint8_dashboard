import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableProductList(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de usuarios"} key={'usersPanel'}>
              <Table 
                heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'firstName', title: 'Nombre'},
                  {prop: 'lastName', title: 'Apellido'},
                  {prop: 'email', title: 'Correo'},
                ]} 
                fetch={'http://localhost:3001/api/users/?query={"page":"1","perPage":"4","firstName":"","lastName":"","email":""}'}
                key={'users'}
              />
            </BigPanel> 
        </React.Fragment>
    )
}

export default TableProductList;