import React from 'react';
import ReactJson from 'react-json-view'

import {InputField} from './Components/InputField.jsx';
import {Canvas} from './Components/Canvas.jsx';

import '../styles/index.scss';

export default class Application extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
		    data  : 'Data input...',
		    config: 'Config input...'
		};
		this.updateData = this.updateData.bind(this);
		this.updateConfig = this.updateConfig.bind(this);
	}

	updateData(dataInput) {
		console.log("Data" + dataInput)
		var dat,
			validData
		try {
			dat= JSON.parse(dataInput)
			validData = true
		} catch (me) {
			validData = false
		}
		this.setState({
			data : dataInput,
			validData
		});
	}

	updateConfig(configInput) {

		var configuration,
			validConfig
		try {
			configuration= JSON.parse(configInput)
			validConfig = true
		} catch (me) {
			validConfig = false
		}
		this.setState({
			config : configInput,
			validConfig
		});
	}

	render() {
		return (
			<div className = 'application'>
		
				<div className = 'dataContainer'>
					<InputField 
						className = {"dataField"} 
						onChange  = {this.updateData} 
						value     = {this.state.data}
					/>
				</div>

				<div className = 'configContainer'>
					<InputField 
						onChange = { this.updateConfig } 
						value={this.state.config}
					/>
				</div>

				<div className = 'canvasContainer'>
					{ this.state.validConfig && this.state.validData ? 
						<Canvas data={ this.state.data } config={ this.state.config }/>	: 
						this.state.validData? 
							<div className = 'warning'><b>CONFIG JSON BAD!</b></div> : 
							<div className = 'warning'><b>DATA JSON BAD!  </b></div> 
					}
					</div>
			</div>
		)
	}

}

