import React,{ Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
	render(){
		//console.log(this.props.todo) //定义todo变量
		return (
			<div  className={this.props.todo.status}>
				<input type='checkbox'	checked={this.props.todo.status === 'completed'/*判断this.props.todo.status是否等于completed*/}
				onChange = {this.toggle.bind(this)}/>{this.props.todo.title}
				<button onClick = {this.delete.bind(this)}> delete </button>
			</div>
		); //获取todo中的title
	}
	
	toggle(e){
		this.props.onToggle(e, this.props.todo)
	}
	
	delete(e){
		this.props.onDelete(e, this.props.todo)
	}
}

