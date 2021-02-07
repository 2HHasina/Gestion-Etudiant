import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, PageHeader, Upload, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "../../../style/Admin.css";
import axios from "axios";

const { Dragger } = Upload;
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
// const props = {
//   name: "file",
//   multiple: false,
//   //action: "http://localhost:4000/file/",
//   onChange(info) {
//     fileUploaded = info.file;
//     //const { status } = info.file;
//     // if (status !== "uploading") {
//     //   console.log(info.file, info.fileList);
//     // }
//     // if (status === "done") {
//     //   message.success(`${info.file.name} file uploaded successfully.`);
//     // } else if (status === "error") {
//     //   message.error(`${info.file.name} file upload failed.`);
//     // }
//   },
// };

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

  const onSubmit = async (e) => {
    const Cours = {
      libelle: libelle,
      Module: idModule,
      file: file,
    };
    let formData = new FormData();
    formData.append("cours", file);
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/file",
      data: formData,
    }).then((res) => res.data);
  };
  const onChange = (e) => {
    setFile(e.target.files[0]);
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
            rules={[{ required: true,message:"File is required !" }]}
            wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
          >
            {/*<Dragger
              fileList={listFile}
              customRequest={dummyRequest}
              name="file"
              onChange={onChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger> */}
              <input
                type="file"
                name="file"
                onChange={onChange}
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

export default AddCours;
