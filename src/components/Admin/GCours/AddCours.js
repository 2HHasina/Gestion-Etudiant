import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, PageHeader, Upload, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "../../../style/Admin.css";
import axios from "axios";
import URL from "../../../config/config";

const { Dragger } = Upload;
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};


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

const AddCours = () => {
  const [module, setModule] = useState([]);
  const [idModule, setIdModule] = useState(0);
  const [libelle, setLibelle] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    const Cours = {
      libelle: libelle,
      Module: idModule,
      file: file,
    };
    let formData = new FormData();
    formData.append("content", file);
    formData.set("libelle", libelle);
    formData.set("module", idModule.toString());
    const res = axios({
      method: "post",
      url: `${URL}/api/cours`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: formData,
    })
      .then((res) => message.success("Cours added"))
      .catch((err) => message.error(err.response.data.message));
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const props = {
    name: "file",
    multiple: false,
    onChange(info) {
      setFile(info.file);
    },
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL}/api/module/list`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res.status);
        let tab = [];
        res.data.map((elm) => tab.push({ id: elm.id, libelle: elm.libelle }));
        setModule(tab);
      })
      .catch((err) => message.error(err.response.data.message));
  }, []);

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="AJOUTER"
        subTitle="COURS"
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
            name="module"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue=""
              //style={{ width: 120 }}
              onChange={(id) => setIdModule(id)}
              options={
                module.length !== 0 &&
                module.map((elm) => ({ label: elm.libelle, value: elm.id }))
              }
            />
          </Form.Item>
          <Form.Item
            label="COURS"
            name="cours"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(e) => setLibelle(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="file"
            rules={[{ required: true, message: "File is required !" }]}
            wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
          >
            <Dragger
              {...props}
              beforeUpload={()=>false}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
         
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

export default AddCours;
