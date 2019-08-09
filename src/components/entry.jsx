import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";


class Entry extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.info.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount = () => {
    if (this.props.info.count === 0) {
      return <span className={this.getBadgeClasses()}>{this.props.info.count}</span>;
    } else return this.props.info.count;
  };
  incrementEntry = e => {
    this.props.incrementEntry(this.props.info);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>{this.props.info.note}</h1>
        <h1>{this.formatCount()}</h1>
        <button
          onClick={this.incrementEntry}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Entry;

