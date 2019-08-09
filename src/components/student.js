import React from "react";
import Entry from "./entry";
import { Input } from "antd";
import { EntryField } from "./entryField";

class Student extends React.Component {
  addEntry = e => {
    let entries = [...this.state.entries, e];
    this.setState({
      entries: entries
    });
  };
  incrementEntry = entry => {
    let incrementedEntry = {
      ...entry,
      count: entry.count + 1
    }
    
    let student = this.props.info
    let filteredEntries = student.entries.filter((entry) => {
        return entry.id != incrementedEntry.id
    })
    let entries = [...filteredEntries, incrementedEntry]
    student = { ...this.props.info, entries }
    this.props.addToEntry(student);
  };
  render() {
    return (
      <div>
        <EntryField addEntry={this.addEntry} />
        <h1>{this.props.info.phone}</h1>
        <h2>{this.props.info.notes}</h2>
        <h2>{this.props.info.interestLevel}</h2>
        <h2>{this.props.info.referrer}</h2>
        <div>
          {this.props.info.entries.map(entry => (
            <Entry incrementEntry={this.incrementEntry} info={entry} />
          ))}
        </div>
      </div>
    );
  }
}

export default Student;
