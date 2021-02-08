import React, { Component } from "react";
import "../../style/Auth.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleLogin = (res) => {
    localStorage.setItem("token", res.data);
    let decode = jwt_decode(localStorage.getItem("token"));
    console.log(decode);
    //if(decode.roles[0]==='*')
    if (decode.roles[0] === "ADMIN") this.props.history.push('/admin');
    if (decode.roles[0] === "PROF") this.props.history.push('/prof');
    if (decode.roles[0] === "STUDENT") this.props.history.push('/student');
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    console.log(this.state)
    const res = await axios({
      method: "post",
      url: "http://10.30.238.242:8080/api/users/login",
      data: {
        email: this.state.email,
        password: this.state.password
      },
    })
      .then((res) => this.handleLogin(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="content">
        <Form
          name="normal_login"
          className="login-form formIn"
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
            onChange={this.handleChange}
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
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div className="link">
              Or
              <br />
              <a href="/signup">Register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(SignIn);
