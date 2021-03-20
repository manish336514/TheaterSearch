import React, { Component } from "react";
import TheaterListing from './TheaterListing';
const DATA = [
  {
    movie: "movie1",
    theater: "theater1",
  },
  {
    movie: "movie1",
    theater: "theater1",
  },
  {
    movie: "movie1",
    theater: "theater2",
  },
  {
    movie: "movie2",
    theater: "theater3",
  },
  {
    movie: "movie3",
    theater: "theater1",
  },
  {
    movie: "movie3",
    theater: "theater2",
  },
  {
    movie: "movie3",
    theater: "theater4",
  },
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", resultArray: [] };
  }

  search = (arr, s) => {
    var matches = [],
      i,
      key;

    for (i = arr.length; i--; )
      for (key in arr[i])
        if (arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1)
          matches.push(arr[i]);

    return matches;
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });

    var result = this.search(DATA, event.target.value);
    console.log("Result", result);
    console.log("handleChange", event.target.value);
    this.setState({resultArray:result})
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          Search
          <form onSubmit={this.handleSubmit}>
            <label>
              Movie Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>

        <div><TheaterListing  resultArray={this.state.resultArray}/></div>
      </div>
    );
  }
}
