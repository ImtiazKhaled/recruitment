import React from 'react';
import { StudentForm } from './studentForm';
import { Modal, Button } from 'antd';


class StudentNew extends React.Component {
    state = {
        formModal: false,
    };

    confirmAdd = e => {
        this.props.addStudent(e);
        this.setState({
            formModal: false
        })
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({formModal: true})}> Add Student </Button>
                <Modal
                    title="Add Student"
                    centered
                    visible={this.state.formModal}
                    onCancel={() => this.setState({ formModal: false })}
                    footer={null}
                >
                    <StudentForm getNewStudentInfo={this.confirmAdd} />
                </Modal>
            </div>
        );
    }
}

export default StudentNew;