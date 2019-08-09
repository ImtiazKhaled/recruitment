import React from "react";
import Entry from "./entry";
import { EntryField } from "./entryField";

class Student extends React.Component {
  addEntry = entry => {
    let entryToAdd = {
      id: this.props.info.entries.length + 1,
      note: entry.note,
      count: 0,
    }
    let entries = [...this.props.info.entries, entryToAdd]
    let student = { ...this.props.info, entries }
    this.props.addEntry(student);
  };
  incrementEntry = entry => {
    let incrementedEntry = {
      ...entry,
      count: entry.count + 1
    }

    let student = this.props.info
    let filteredEntries = student.entries.filter((entry) => {
      return entry.id !== incrementedEntry.id
    })
    let entries = [...filteredEntries, incrementedEntry]
    student = { ...this.props.info, entries }
    this.props.addEntry(student);
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
            <Entry key={entry.id} incrementEntry={this.incrementEntry} info={entry} />
          ))}
        </div>
      </div>
    );
  }
}

export default Student;
