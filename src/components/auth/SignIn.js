import React, { Component } from "react";
import "../../style/Auth.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
      console.log(this.state)
  }

  render() {

    return (
      <div className="content">
        <Form
          name="normal_login"
          className="form formIn"
          onFinish={this.handleSubmit}
        >
          <div className="icon">
            <i className="fas fa-user-lock"></i>
          </div>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button
              
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SignIn;
