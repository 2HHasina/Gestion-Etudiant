import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: '${label} is required!',
};

const Service = () => {
    const [cin, setCin] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [desc, setDesc] = useState('')

  const onSubmit = () => {
    console.log(cin);
    console.log(nom);
    console.log(prenom);
    console.log(desc);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onSubmit} validateMessages={validateMessages}>
        <Form.Item
            label="CIN"
            rules={[
            {
                required: true,
                },
              ]}
            >
              <Input onChange={(e)=> setCin(e.target.value)}/>
            </Form.Item>
      <Form.Item
        label="Nom"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={(e)=> setNom(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Prenom"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={(e)=> setPrenom(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Description" rules={[
            {
                required: true,
                },
              ]}>
        <Input.TextArea onChange={(e)=> setDesc(e.target.value)}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Service

