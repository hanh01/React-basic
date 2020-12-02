import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
