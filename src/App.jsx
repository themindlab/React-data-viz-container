import React from 'react';
import ReactJson from 'react-json-view'

import {DataVis} from './Components/DataVis.jsx';

import '../styles/index.scss';

var defaultData = [];
for(var i=0; i<10 ; i++){
	defaultData.push(Math.random())
}

var defaultConfiguration = {
	color : '#798'
}


export default class Application extends React.Component {

	render(){
		return(<DataVis 
			data={defaultData}
			configuration={defaultConfiguration}
		/>)
	}
}


