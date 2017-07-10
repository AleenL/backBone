import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css'

 class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            todoList: [
            ]
        }
    }
    render() {
        	console.log(2)
        let todos = this.state.todoList
        	.filter((item) => !item.deleted) //过滤掉deleted为ture的值，留下不等于true的值
        	.map((item, index) =>{//遍历数组todoList中的值
        	return (<li key={index}>
						<TodoItem todo={ item } /*定义todo为this.state.todoList中值*/ 
						onToggle = {this.toggle.bind(this)} 
						onDelete = {this.delete.bind(this)}/>
            		</li>)     
        })
        
        //console.log(todos)
        return ( 
        	<div className = "App" >
            	<h1> 我的待办 </h1> 
            	<div className = 'inputWrapper'>
            		<TodoInput content = { this.state.newTodo } /*定义content为this.state.newTodo*/ 
            		onChange = {this.changeTitle.bind(this)} 
            		onSubmit = {this.addTodo.bind(this)}
            		/>
            	</div>
            	<ol> { todos } </ol> 
            </div >
        )
    }
    
    delete(event, todo){
    	todo.deleted = true
    	this.setState(this.state)//重置了state的值
    	console.log(this.state)
    }
    
    toggle(e,todo){
    	//console.log(todo.status)
    	todo.status = todo.status === 'completed' ? '' : 'completed' //判断todo.states是否等于completed，
    	this.setState(this.state)
    	console.log(1)
    	//console.log(todo)
    }
    
    changeTitle(event){
    	this.setState({
    		newTodo: event.target.value,
    		todoList: this.state.todoList
    	})
    }
	
    addTodo(event){
    	this.state.todoList.push({
    		id: idMarker(),
    		title: event.target.value,
    		status: 'null',
    		deleted: false
    	})
    	
    	this.setState({
    		newTodo: '',
    		todoList: this.state.todoList
    	})
    }
}

export default App;

let id = 0

function idMarker(){
	id += 1
	return id
}
