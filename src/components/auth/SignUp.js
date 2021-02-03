import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../style/Auth.css";
import { Form, Input, Button, Radio } from "antd";
import FormItem from "antd/lib/form/FormItem";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

class SignUp extends Component {
  state = {
    cin: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    role: "",
  };

  handleSubmit = () => {
    console.log("Received values of form: ", this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="content">
        <Form
          {...formItemLayout}
          name="register"
          onFinish={this.handleSubmit}
          className="form formUp"
          scrollToFirstError
        >
          <h2 className="text-center">
            <strong>Create</strong> an account
          </h2>
          <Form.Item
            name="cin"
            label="CIN"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input name="cin" onChange={this.handleChange} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input name="lastName" onChange={this.handleChange} />
          </Form.Item>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input name="firstName" onChange={this.handleChange} />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input name="email" onChange={this.handleChange} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password name="password" onChange={this.handleChange} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password name="confirm" onChange={this.handleChange} />
          </Form.Item>
          <FormItem
            name="role"
            label="Role"
            className="radio"
            rules={[{ required: true, message: "Please chose your Role" }]}
          >
            <Radio.Group
              name="role"
              onChange={this.handleChange}
              value={this.state.role}
            >
              <Radio value="Admin">Admin</Radio>
              <Radio value="Prof">Professeur</Radio>
              <Radio value="Etudiant">Etudiant</Radio>
            </Radio.Group>
          </FormItem>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SignUp;
