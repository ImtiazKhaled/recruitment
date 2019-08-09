import React from "react";
import Entry from "./entry";
import { EntryField } from "./entryField";
import { Typography } from 'antd';
const { Title } = Typography;

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
    // let entries = [...student.entries, incrementedEntry]
    let entries = [...filteredEntries, incrementedEntry]
    student = { ...this.props.info, entries }
    this.props.addEntry(student);
  };
  deleteEntry = entry => {
    let incrementedEntry = {
      ...entry,
      count: entry.count + 1
    }
    let student = this.props.info
    let filteredEntries = student.entries.filter((entry) => {
      return entry.id !== incrementedEntry.id
    })
    student = { ...this.props.info, entries: filteredEntries }
    this.props.addEntry(student);  
  }
  render() {
    return (
      <div>
        <Title style={{fontSize: '1.5em'}}>
          Phone Number:  {this.props.info.phone}
        </Title>
        <Title style={{fontSize: '1.5em'}}>
          Notes:  {this.props.info.notes}
        </Title>
        <Title style={{fontSize: '1.5em'}}>
          Interest Level:  {this.props.info.interestLevel}
        </Title>
        <Title style={{fontSize: '1.5em'}}>
          Reffered By:  {this.props.info.referrer}
        </Title>
        <EntryField addEntry={this.addEntry} />
        <div>
          {this.props.info.entries.map(entry => (
            <Entry key={entry.id} incrementEntry={this.incrementEntry} deleteEntry={this.deleteEntry} info={entry} />
          ))}
        </div>
      </div>
    );
  }
}

export default Student;
