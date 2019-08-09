import React from "react";
import { Collapse } from "antd";
import Student from "./student";
import StudentNew from "./studentNew";
import { connect } from 'react-redux';
import { AddStudent, IncrementEntry } from '../redux/rootActions';
const { Panel } = Collapse;

class Students extends React.Component {
  addToEntry = student => {
    this.props.incrementEntry(student);
  };
  render() {
    return (
      <div>
        <StudentNew addStudent={(e) => this.props.addStudent(e)} />
        <Collapse>
          {this.props.students.map(student => (
            <Panel header={student.name} key={student.id}>
              <Student addToEntry={this.addToEntry} addStudent={this.addStudent} info={student} />
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
    incrementEntry: (student) => { dispatch(IncrementEntry(student)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

