import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowProduct from './ContentRowProduct'


function LinkTotales(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <ContentRowProduct />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkTotales;