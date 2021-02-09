import React, { useState } from "react";
import { Form, Input, Button, PageHeader } from "antd";
//import { PostUsers } from "../../store/actions/usersAction";
import "../../../style/Admin.css";
import axios from "axios";
import Notification from "../../Util/Notification";
import URL from "../../../config/config"

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

const AddFiliere = () => {
  const [libelle, setFiliere] = useState("");

  const onSubmit = (e) => {
    console.log(libelle);
    const res = axios({
      method: "post",
      url: `${URL}/api/filiere/`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        libelle: libelle,
      },
    })
      .then((res) => {
        return <Notification label={libelle} />;
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="AJOUTER"
        subTitle="FILIERE"
      />
      <div className="container">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Filiere"
            name="filiere"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(e) => setFiliere(e.target.value)} />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     PostUsers: (user) => dispatch(PostUsers(user)),
//   };
// };
export default AddFiliere;
