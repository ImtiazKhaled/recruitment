import React from "react";
import Entry from "./entry";
import { Input, Button } from "antd";
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
          {/* <Input placeholder="Type" />
          {
            <Button type="primary" onClick={this.addButton}>
              Add Entry
            </Button>
          } */}
          <h1>{this.props.info.email}</h1>
          <h2>{this.props.info.gender}</h2>
          <div>
            {this.state.entries.map(entry => (
              <Entry info={entry} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
