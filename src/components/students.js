import React from "react";
import { Collapse } from "antd";
import Student from "./student";
import StudentNew from "./studentNew";
import { connect } from 'react-redux';
import { AddStudent, AddEntry } from '../redux/rootActions';
const { Panel } = Collapse;

class Students extends React.Component {
  addEntry = student => {
    this.props.addEntry(student);
  };
  render() {
    return (
      <div>
        <StudentNew addStudent={(e) => this.props.addStudent(e)} />
        <Collapse>
          {this.props.students.map(student => (
            <Panel header={student.name} key={student.id}>
              <Student addEntry={this.addEntry} addStudent={this.addStudent} info={student} />
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => { dispatch(AddStudent(student)) },
    addEntry: (student) => { dispatch(AddEntry(student)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

