import React from 'react';
import { Collapse, Button } from 'antd';
import Student from './student';
const { Panel } = Collapse;

class Students extends React.Component {
    state = {
        students: [
            { "id": 1, "first_name": "Kaitlyn", "last_name": "Hadrill", "email": "khadrill0@uiuc.edu", "gender": "Female" },
            { "id": 2, "first_name": "Murdock", "last_name": "Comins", "email": "mcomins1@cam.ac.uk", "gender": "Male" },
            { "id": 3, "first_name": "Georgi", "last_name": "Taplin", "email": "gtaplin2@fotki.com", "gender": "Male" },
            { "id": 4, "first_name": "Roth", "last_name": "Wankel", "email": "rwankel3@delicious.com", "gender": "Male" },
            { "id": 5, "first_name": "Noelle", "last_name": "Chazier", "email": "nchazier4@vimeo.com", "gender": "Female" },
            { "id": 6, "first_name": "Konrad", "last_name": "Pleasance", "email": "kpleasance5@noaa.gov", "gender": "Male" },
            { "id": 7, "first_name": "Ulick", "last_name": "Weare", "email": "uweare6@bloglovin.com", "gender": "Male" },
            { "id": 8, "first_name": "Ado", "last_name": "Niset", "email": "aniset7@newsvine.com", "gender": "Male" },
            { "id": 9, "first_name": "Cyndi", "last_name": "Lax", "email": "clax8@linkedin.com", "gender": "Female" },
            { "id": 10, "first_name": "Truda", "last_name": "Crunkhurn", "email": "tcrunkhurn9@cdbaby.com", "gender": "Female" }
        ]
    }

    addStudent = e => {
        const student = { "id": 11, "first_name": "Candie", "last_name": "Sibille", "email": "csibille1@wordpress.com", "gender": "Female" };
        let students = [
            ...this.state.students, student
        ]
        console.log(this.state.students)
        this.setState({
            students: students
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.addStudent}> Add Student </Button>
                <Collapse>
                    {
                        this.state.students.map(
                            student =>
                                <Panel header={student.first_name} key={student.id}>
                                    <Student info={student} />
                                </Panel>
                        )
                    }
                </Collapse>
            </div>
        );
    }
}

export default Students;