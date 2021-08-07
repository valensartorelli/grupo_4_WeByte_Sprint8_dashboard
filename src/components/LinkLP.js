import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import LastProduct from './LastProduct'


function LinkTotales(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <LastProduct />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkTotales;