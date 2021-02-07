import React, { useState, useEffect } from "react";
import { Form, Input, Button, PageHeader, Select } from "antd";
import { PostUsers } from "../../store/actions/usersAction";
import "../../style/Admin.css";

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
  const [cin, setCin] = useState();
  const [niveau, setNiveau] = useState([]);
  const [idNiveau, setIdNiveau] = useState(0);
  const [semestre, setSemestre] = useState("");

  const { type, label } = props;

  const onSubmit = (e) => {
    console.log(cin)

  };
  useEffect(async () => {
    // const data = await axios.get(URL_Filiere);
    const data = [
      {
        id: 1,
        libelle: "CP1",
      },
      {
        id: 2,
        libelle: "3 eme annee GI",
      },
      {
        id: 3,
        libelle: "GRT",
      },
    ];
    setNiveau(data);
  }, []);
  const handleChange = (e) => {
    if (type === "USER") setCin(e.target.value);
    if (type === "SEMESTRE") setSemestre(e.target.value);
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
            label={label}
            name={label.toLowerCase()}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} />
          </Form.Item>
          {(props.role === "ETUDIANT" || type === "SEMESTRE") && (
            <Form.Item
              label="NIVEAU"
            name="niveau"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                defaultValue=""
                //style={{ width: 120 }}
                onChange={(id) => setIdNiveau(id)}
                options={
                  niveau.length !== 0 &&
                  niveau.map((elm) => ({ label: elm.libelle, value: elm.id }))
                }
              />
            </Form.Item>
          )}
          {type === "USER" && (
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
          )}
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
