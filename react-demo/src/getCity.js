
import React,{ Component } from 'react';

export default class getCity extends Component {
	render(){
		console.log(this.props.todo) //定义todo变量
		return <h1> {this.props.city} </h1> 
	}
}
