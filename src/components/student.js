import React from "react";
import Entry from "./entry";
import { Input } from "antd";
import { EntryField } from "./entryField";
const { Search } = Input;

class Student extends React.Component {
  state = {
    entries: []
  };
  addEntry = e => {
    let entries = [...this.state.entries, e];
    this.setState({
      entries: entries
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <EntryField addEntry={this.addEntry} />
          <h1>{this.props.info.phone}</h1>
          <h2>{this.props.info.notes}</h2>
          <h2>{this.props.info.interestLevel}</h2>
          <h2>{this.props.info.referrer}</h2>
          <div>
            {this.props.info.entries.map(entry => (
              <Entry info={entry} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
