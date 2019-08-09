import React from "react";
import { Collapse, Layout } from "antd";
import Student from "./student";
import StudentNew from "./studentNew";
import { connect } from 'react-redux';
import { AddStudent, AddEntry } from '../redux/rootActions';
const { Panel } = Collapse;
const { Content, Footer } = Layout;

class Students extends React.Component {
  addEntry = student => {
    this.props.addEntry(student);
  };
  render() {
    return (
      <Layout>
        <Content style={{
          minHeight: '20vh', 
          textAlign: 'center', 
          fontSize: '10vh', 
          background: 'linear-gradient(to left, #ff9068, #fd746c)',
          color: 'white',
        }}>
          Recruitment
        </Content>
        <Content>
          <StudentNew addStudent={(e) => this.props.addStudent(e)} />
          <Collapse>
            {this.props.students.map(student => (
              <Panel header={student.name} key={student.id}>
                <Student addEntry={this.addEntry} addStudent={this.addStudent} info={student} />
              </Panel>
            ))}
          </Collapse>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'sticky' }}>Nahian Alam & Imtiaz Mujtaba Khaled ©2019</Footer>
      </Layout>
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

