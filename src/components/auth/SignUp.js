import React from "react";
import "antd/dist/antd.css";
import "../../style/Auth.css";
import { Form, Input, Button, Radio } from "antd";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 20,
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

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const user = {
      cin: values.cin,
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    const res = await axios({
      method: "post",
      url: "http://10.30.238.242:8080/api/users/signup",
      data: user,
    })
      .then((res) => console.log(res.statusText))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="content">
      <Form
        {...formItemLayout}
        className="formUp login-form"
        form={form}
        name="register"
        onFinish={onFinish}
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
              message: "Please input your CIN!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Nom"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="Prenom"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input />
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
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          //style={{marginRight:'10px'}}
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
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
              message: "Please input your Role!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="STUDENT">Etudiant</Radio>
            <Radio value="PROF">Professeur</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
