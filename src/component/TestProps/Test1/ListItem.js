import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {
    render() {
        let username  = 'Hanh';
        return (
            <div>
                <Item name={username}/>
            </div>
        )
    }
}
export default ListItem;
