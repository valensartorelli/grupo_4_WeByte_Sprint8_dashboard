import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

class ContentRowTop extends Component{
	constructor(props) {
		super (props);
		this.state = {
			fetch: 'http://localhost:3001/api/products/latest',
			data: [],
			meta: {}
		}
	}

	componentDidMount() {
		fetch(this.state.fetch)
		.then(result => {
			result.json()
		})
		.then(data => {
			this.setState({
				data: data.data.list,
				meta: data.meta
			  });
			console.log("Resultado: " + data.meta);
		})
		.catch(error => {
			console.log(error);
		})
	}

	componentDidUpdate() {
		console.log("Me actualice!");
	}


	render() {
		return (
			<React.Fragment>
 				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard WEBYTE</h1>
					</div>
				
 					{/*<!-- Tarjetas-->*/}
 					<ContentRowMovies />
					
	
					{/*<!-- Content Row Ultimo producto cargado -->*/}
					<div className="row">
						{/*<!-- Last product in DB -->*/}
 						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
 								<div className="card-header py-3">
 									<h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado</h5>
 								</div>
 								<div className="card-body">
 									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
 									</div>
									<h3> Nombre producto   </h3>
 									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
 									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
 								</div>
 							</div>
 						</div>
 						{/*<!-- End content row last product in Data Base -->*/}

 						{/*<!-- Usuarios in DB o productso por categoria -->*/}
						<GenresInDb />

					{/*<!--End Genres In Db-->*/}		
 					</div>
 				</div>
 				{/*<!--End Content Row Top-->*/}

        	</React.Fragment>
		)
	}
}


export default ContentRowTop;