import React, { Component } from 'react';
import ProductList from './ProductList';

class Product extends Component {
    constructor() {
        super();

        this.state ={
            products : []
        }
    }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3001/api/products')).json();
        // console.log(props);
        if (props) {
            this.setState({products: props.data.list})
            console.log(this.state.products);
        }

    }


    render() {
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the products in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Detail</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.products.map((product,index) => {
                                        return <ProductList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}


export default Product;