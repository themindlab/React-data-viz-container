import React from 'react';



// Import the scss
import '../styles/index.scss';


class TextInput extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render(){

		return(
			<div>
				<button onClick={ () => { this.props.onChange('werwe')} } >
					Anything
				</button>
				
			</div>
		)
	
	}

}
/*
	Main application
*/

export default class Application extends React.Component {

	constructor(props){
		super(props);
		this.update = this.update.bind(this)
	}


	update(dataInput) {
		console.log('Parent :' + dataInput)
	    this.setState({ dataInput });
	}

	/*
		The main part of the application consists only of a project folder and 
		the associatied different types of methods for it.
	*/
	render() {

		return (
			<div className = 'application'>
				<h1>A react starter kity hot load</h1>
				<TextInput onChange = {this.update}/>
			</div>
		)


	}

}

