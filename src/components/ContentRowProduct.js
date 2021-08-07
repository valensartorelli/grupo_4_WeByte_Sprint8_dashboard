import React, { Component } from 'react';
import TotalAmountPanel from './TotalAmountPanel'


class ContentRowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: []
        }
    }

    // componentDidMount() {

    //     fetch("http://localhost:3000/api/products")
    //         .then(result => result.json())
    //         .then(result => {

    //             let products = result.meta;
    componentDidMount(){

        let promises = [
          fetch("http://localhost:3000/api/products").then(result => result.json()),
          fetch("http://localhost:3000/api/users").then(result => result.json()),
          fetch("http://localhost:3001/api/categories").then(result => result.json()),
          fetch("http://localhost:3000/api/brands").then(result => result.json())
        ];
    
        Promise.all(promises)
        .then(result => {
    
          let products = result[0].meta;
          let users = result[1].meta;
          let category = result[2].meta;
          let brand = result[3].meta;

                this.setState({
                    metrics: [
                        {
                            title: "Total de Usuarios",
                            color: "warning",
                            value: users.total
                        },
                        {
                            title: "Total de productos",
                            color: "primary",
                            value: products.total
                        },
                        {
                            title: "Total de marcas",
                            color: "success",
                            value: brand.total
                        },
                        {
                            title: "Total de categorías",
                            color: "info",
                            value: category.total
                        }
                    ]
                });
            })
    }

        componentDidUpdate(){}

        // let cardProps = [productInDataBase,amount,user];


        render(){
            return(
              <React.Fragment>
                                    <div className="row">
                                {this.state.metrics.length ?
                                    this.state.metrics.map((metric, index) =>
                                        <TotalAmountPanel
                                            title={metric.title}
                                            color={metric.color}
                                            iconClass={metric.iconClass}
                                            value={metric.value}
                                            key={index}
                                        />
                                    )
                                    :
                                    <p> Cargando métricas </p>
                                }
        
                            </div>
        
              </React.Fragment>
            )
          }
        }
    
        
export default ContentRowProduct;