import React from 'react';

import {Canvas}     from './Canvas.jsx';
import {BarTest}    from './BarTest.jsx';
import {InputField} from './InputField.jsx';

import '../../styles/index.scss';

const toObject =(text)=> {
	var obj 
	try {
		obj = JSON.parse(text)
	} catch(me){
		// returns NULL
	}
	return obj
}

const toText = (obj)=> {
	var text = JSON.stringify(obj, null ,2)
	return text
}

export class DataVis extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
		    data  : props.data,
		    config: props.configuration,
		    showData: true,
		    showConfig: true
		};

		this.updateData   = this.updateData.bind(this);
		this.toggleData   = this.toggleData.bind(this);
		this.updateConfig = this.updateConfig.bind(this);
		this.toggleConfig = this.toggleConfig.bind(this);
	}

	updateData(dataText) {
		console.log(dataText)
		var data = toObject(dataText)
		if(data){
			this.setState({data})
		}

	}

	updateConfig(configText) {

		var config = toObject(configText)
		if(config){
			this.setState({config})
		}

	}

	toggleData() {
		this.state.showData ? 
		this.setState({	showData : false }) :
		this.setState({	showData : true  })
	}

	toggleConfig() {
		this.state.showConfig ? 
		this.setState({	showConfig : false }) :
		this.setState({	showConfig : true  })
	}

	getBoxDimensions() {
	   console.log('== Getting Dimensions ==');
	   var svg = document.getElementById('svg');
	   console.log('client', svg.clientWidth + 'x' + svg.clientHeight);
	}

	render() {
		return (

			<div className = 'application'>
		
				<div className = 'dataContainer'>
					<button onClick={this.toggleData}>Show Data</button><br/>
						{ this.state.showData ? 
							<InputField 
								className = {"dataField"} 
								onChange  = {this.updateData} 
								value     = { toText(this.state.data) }
							/> :
							<span></span>}
				</div>

				<div className = 'configContainer'>
					<button onClick={this.toggleConfig}>Show Config</button><br/>
						{ this.state.showConfig ? 
							<InputField 
								className = {"configField"} 
								onChange  = {this.updateConfig} 
								value     = { toText(this.state.config)}
							/> :
							<span></span>}
					<button onClick={this.getBoxDimensions}>Get SVG Dimensions</button>
				</div>

				<div className = 'D3Field'>			
					<BarTest data={this.state.data} configuration={this.state.config} size = {[document.getElementById('svg').clientWidth - 20,document.getElementById('svg').clientHeight-20]}/>
				</div>

			</div>
		)
	}
}

