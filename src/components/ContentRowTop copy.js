import React, {Component} from 'react';

import ProductsByCat from './ProductsByCat';
import LastProduct from './LastProduct';
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
				
 					{/*<!-- Total categorias / productos / usuarios-->*/}
 					<ContentRowMovies />
					
	
					{/*<!-- Content Row Ultimo producto cargado -->*/}
					<div className="row">
						<LastProduct />

 						{/*<!-- Usuarios in DB o productso por categoria -->*/}
						<ProductsByCat />

					{/*<!--End Genres In Db-->*/}		
 					</div>
 				</div>
 				{/*<!--End Content Row Top-->*/}

        	</React.Fragment>
		)
	}
}


export default ContentRowTop;