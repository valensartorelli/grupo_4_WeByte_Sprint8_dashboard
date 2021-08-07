import React, { Component } from 'react';
import TotalAmountPanel from './TotalAmountPanel'


class ContentRowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: []
        }
    }

    componentDidMount() {

        fetch("http://localhost:3000/api/products")
            .then(result => result.json())
            .then(result => {

                let products = result.meta;


                this.setState({
                    metrics: [
                        {
                            title: "Total de productos",
                            color: "success",
                            value: products.total
                        },
                        {
                            title: "Total de marcas",
                            color: "warning",
                            value: products.total
                        },
                        {
                            title: "Total de categorías",
                            color: "info",
                            value: products.countByCategory.hombre
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