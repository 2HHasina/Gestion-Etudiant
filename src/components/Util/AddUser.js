import React, { useState } from "react";
import { Form, Input, Button, PageHeader } from "antd";
import { PostUsers } from "../../store/actions/usersAction";
import "../../style/Admin.css"

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddUser = (props) => {
  const [cin, setCin] = useState("");

  const onSubmit = (e) => {
    const user = {
      cin: cin,
      role: props.role,
    };
    e.preventDefault();
    props.PostUsers(user);
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        //onBack={() => null}
        title="AJOUTER"
        subTitle={props.role}
      />
      <div className="container">

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="CIN"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => setCin(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="middle" readOnly value={props.role} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Ajouter
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    PostUsers: (user) => dispatch(PostUsers(user)),
  };
};
export default AddUser;
