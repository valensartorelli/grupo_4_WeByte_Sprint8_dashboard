import React from 'react';
import imagenFondo from '../assets/images/404.png';
import TopBar from "./TopBar";
import Footer from "./Footer";

function NotFound(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="text-center">
                        <div className="cont-totales">
                            <h1>404 Not Found</h1>
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>

        
        
    )
}


export default NotFound;