import React, { Component } from "react";
import {debounce} from 'lodash';

export default class SearchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: "",
        data: [],
        filteredData: [],
    }
    this.handleInputChange = debounce(this.handleInputChange.bind(this), 1000);
  }

  handleInputChange = (event) => {
    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return element.name.includes(event.target.value);
      });
      console.log(filteredData);

      return {
        filteredData,
      };
    });
  };

  getData = () => {
    fetch(` http://localhost:3000/product`)
      .then((response) => response.json())
      .then((data) => {
        const { query } = this.state;
        const filteredData = data.filter((element) => {
          return element.name.includes(query);
        });
        console.log(data);

        this.setState({
          data,
          filteredData,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={(e)=>{
                this.setState({query: e.target.value})
                this.handleInputChange(e)
            }}
          />
        </form>
        <div>
          {this.state.filteredData.map((i) => (
            <p>{i.name}</p>
          ))}
        </div>
      </div>
    );
  }
}
