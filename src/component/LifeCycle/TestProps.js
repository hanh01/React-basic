import React, { Component } from 'react'

export default class TestProps extends Component {
    componentWillReceiveProps(nextProps){
        console.log('props:', this.props.name);
        console.log('nextProps:', nextProps.name);
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
