import React, { useState,useEffect } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, PageHeader,Upload, message, Select } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import "../../../style/Admin.css"

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        console.log(info)
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
  const [libelle, setLibelle] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(libelle)
  };

  useEffect(async () => {
    // const data = await axios.get(URL_Filiere);
    const data = [
      {
        id: 1,
        libelle: "BI",
      },
      {
        id: 2,
        libelle: "Genie Logiciel",
      },
      {
        id: 3,
        libelle: "Securite",
      },
    ];
    setModule(data);
  }, []);

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="AJOUTER"
        subTitle='COURS'
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
          label="Cours"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => setLibelle(e.target.value)} />
        </Form.Item>
        <Form.Item rules={[{required: true}]}>
        <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                
            </Dragger>,
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
