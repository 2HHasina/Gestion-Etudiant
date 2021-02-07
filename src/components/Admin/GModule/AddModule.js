import React, { Component, useEffect, useState } from "react";
import { Form, Input, Button, PageHeader, Select } from "antd";
import "../../../style/Admin.css";
import axios from "axios";

const { Option } = Select;
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

const AddModule = () => {
  const [libelle, setLibelle] = useState("");
  const [prof, setProf] = useState([]);
  const [semestre, setSemestre] = useState([]);
  const [idProf, setIdProf] = useState(0);
  const [idSem, setIdSem] = useState(0);

  useEffect(async () => {
    // const data = await axios.get(URL_Filiere);
    const data = [
      {
        id: 1,
        libelle: "GI",
      },
      {
        id: 2,
        libelle: "GE",
      },
      {
        id: 3,
        libelle: "GRT",
      },
    ];
    setSemestre(data);
    setProf(data);

  }, []);

  const onSubmit = (e) => {
    //e.preventDefault();
    
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="AJOUTER"
        subTitle="NIVEAU"
      />
      <div className="container">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="MODULE"
            name="modele"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(e) => setLibelle(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="PROFESSEUR"
            name="prof"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue=""
              //style={{ width: 120 }}
              onChange={(id) => setIdProf(id)}
              options={
                prof.length !== 0 &&
                prof.map((elm) => ({ label: elm.libelle, value: elm.id }))
              }
            />
          </Form.Item>
          <Form.Item
            label="SEMESTRE"
            name="sem"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue=""
              //style={{ width: 120 }}
              onChange={(id) => setIdSem(id)}
              options={
                semestre.length !== 0 &&
                semestre.map((elm) => ({ label: elm.libelle, value: elm.id }))
              }
            />
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

export default AddModule;
