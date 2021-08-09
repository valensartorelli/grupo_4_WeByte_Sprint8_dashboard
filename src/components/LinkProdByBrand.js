import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ProductsByBrand from './ProductsByBrand'


function ProductsByBrands(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <ProductsByBrand />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsByBrands;