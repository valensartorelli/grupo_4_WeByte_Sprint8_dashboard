import React from 'react';
import image from '../assets/images/logo-weByte-blanco.png';
import ContentWrapper from './ContentWrapper';
import LinkTotales from './LinkTotales';
import LinkLP from './LinkLP';
import LinkProdByCat from './LinkProdByCat';
import LinkProdByBrand from './LinkProdByBrand';
import LinkProdList from './LinkProdList';
import LinkUserList from "./LinkUserList";
import NotFound from './NotFound';
import { Link, Route, Switch } from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Totales -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/LinkTotales">
                        <i className="fas fa-chart-pie"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Last product -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/LinkLP">
                        <i className="fas fa-image"></i>
                        <span>Último producto</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Productos por categoría -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LinkProdByCat">
                        <i className="fas fa-tshirt"></i>
                        <span>Productos por categoría</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Listado de productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LinkProdList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Listado de usuarios -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LinkUserList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/LinkLP">
                    <LinkLP />
                </Route>
                <Route path="/LinkTotales">
                    <LinkTotales />
                </Route>
                <Route path="/LinkProdByCat">
                    <LinkProdByCat />
                </Route>
                <Route path="/LinkProdByBrand">
                    <LinkProdByBrand />
                </Route>
                <Route path="/LinkProdList">
                    <LinkProdList />
                </Route>
                <Route path="/LinkUserList">
                    <LinkUserList />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
            
        </React.Fragment>
    )
}
export default SideBar;