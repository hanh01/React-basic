import React, { Component } from 'react';
import TestProps from './TestProps';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            username : 'Hanh'
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render() {
       console.log('render');
       return(
           <div>
               <TestProps name = {this.state.username}/>
               <button onClick = {() => this.setState({username : 'Hanhxg '})}>Click me</button>
           </div>
       )
    }
}

export default LifeCycle;