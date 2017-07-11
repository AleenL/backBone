import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return <input type = 'text' defaultValue = { this.props.content }
        onChange = {this.changeTitle.bind(this)}
        onKeyPress = {this.submit.bind(this)}/>
    }
    
    changeTitle(e){
    	this.props.onChange(e)
    }
    
    submit(e) {
    	if(e.key === 'Enter'){
    		this.props.onSubmit(e)
    		
    	}
    }
}

export default TodoInput