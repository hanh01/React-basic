import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : '',
            searchCount : 0,
            resultCount : 0
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e){
        this.setState({
            searchText : e.target.value,
        })
    }

    handleOnSubmit(){
        this.setState((prevState)=>{
            var count = this.state.searchText.length * 3;
            return{
                searchCount : prevState.searchCount + 1,
                resultCount : count,
            }
        });
    }

    render() {
        return (
            <div className='search-box'>
                <div>
                    <input type='text' value={this.state.searchText} onChange={this.handleOnChange}/>
                    <button onClick={this.handleOnSubmit}>Search</button>
                </div>
                <div>Search Text : {this.state.searchText}</div>
                <div>Search Count : {this.state.searchCount}</div>
                <div>Result Count : {this.state.resultCount}</div>
            </div>
        )
    }
}
