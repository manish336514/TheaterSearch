import React, { Component } from "react";

export default class TheaterListing extends Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
        {this.props.resultArray.map((data, key) => {
          return (
            <ul key={key}>
              <li>{data.theater}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
