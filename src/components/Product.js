import React from 'react';
import TableProductList from "./TableProductList";
import TableUserList from './TableUserList';


function Product (){
        return (
            <React.Fragment>         
            {/*<!-- TABLE PRODUCTS LIST -->*/}
            <div className="row margin">
              
              <TableProductList />

              <TableUserList />
        </div>
        </React.Fragment>
        );
    }



export default Product;