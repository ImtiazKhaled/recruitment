import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Entry extends Component {
  state = {
    count: 2,
    students: [{ name: "nahian" }]
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  formatCount = () => {
    if (this.state.count === 0) {
      return <span className={this.getBadgeClasses()}>{this.state.count}</span>;
    } else return this.state.count;
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  addButton() {}
  render() {
    return (
      <div>
        <button OnClick={this.addButton()}>Add Entry</button>
        <h1>{this.formatCount()}</h1>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Entry;
