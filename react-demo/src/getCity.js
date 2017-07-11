
import React,{ Component } from 'react';

export default class TodoItem extends Component {
	render(){
		//console.log(this.props.todo) //定义todo变量
		return (
			<h1 onChange={this.city.bind(this)}> {this.state.city} </h1> 
		); //获取todo中的title
	}
	
	city(e){
		this.props.getCity(e)
	}
}
