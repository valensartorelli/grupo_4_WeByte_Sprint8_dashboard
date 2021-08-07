import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ProductsByCat from './ProductsByCat'


function ProductsByCategory(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <ProductsByCat />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsByCategory;