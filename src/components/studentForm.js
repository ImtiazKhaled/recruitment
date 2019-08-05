import React from 'react';
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;
const { TextArea } = Input;


class StudentInfo extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) this.props.getNewStudentInfo(values)
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label="Referrer Name" hasFeedback>
                    {getFieldDecorator('referrer', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your name',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Name" hasFeedback>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input the name of the person you want to add',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input the persons phone number' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>

                <Form.Item label="Notes" hasFeedback>
                    {getFieldDecorator('notes', {
                        rules: [
                            {
                                required: true,
                                message: 'Please add anything you know about the person',
                            },
                        ],
                    })(<TextArea rows={4} />)}
                </Form.Item>

                <Form.Item label="Interest Level">
                    {getFieldDecorator('interestLevel', {
                        rules: [{ required: true, message: 'Please select their interest level' }],
                    })(
                        <Select
                            onChange={this.handleSelectChange}
                        >
                            <Option value="NotMuch">Not Much</Option>
                            <Option value="Kinda">Kinda</Option>
                            <Option value="Alot">A Lot</Option>
                        </Select>,
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export const StudentForm = Form.create({ name: 'register' })(StudentInfo);