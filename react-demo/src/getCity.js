
import React,{ Component } from 'react';

export default class GetCity extends Component {
	render(){
		return <h2> {this.props.title} </h2> 
	}
	
	componentWillUpdate(){
		console.log(111)
	}
}
