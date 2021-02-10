import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col, PageHeader, message } from "antd";
import TableList from '../Util/TableList'
import axios from "axios";
import URL from '../../config/config'
import jwt_decode from "jwt-decode";


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
};

const title=["ID","Service","Etat"]


const Service = () => {
  const [cin, setCin] = useState("");
  const [desc, setDesc] = useState("");
  const [libelle, setLibelle] = useState("")
  const [data, setData] = useState([])

  const getData = (decode)=>{
    axios({
      method: "get",
      url: `${URL}/api/service/list/${decode.sub}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>{
            setData(data=>[
                ...data,
                {
                  id: elm.id,
                  service: elm.libelle,
                  etat: elm.status,
                },
              ])
        }
      ))
      .catch((err) => console.log(err))
    
  }

  const onSubmit = () => {
    console.log(cin)
    console.log(libelle)
    let decode = jwt_decode(localStorage.getItem('token'))
    axios({
      method:'post',
      url:`${URL}/api/service/`,
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data:{
        cin:cin,
        libelle:libelle,
        content:desc
      }
    })
    .then((res)=> {
      message.success("Service Sent")})
      window.location.reload()
    .catch(err=>message.error(err.response.data.message))
  };

  useEffect(() => {
    let decode = jwt_decode(localStorage.getItem('token'))
    getData(decode)
    console.log(data)
  }, [])
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="CONSULTER"
        subTitle="SERVICE"
      />
      <div className="container">

        <Row>
          <Col span={12}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onSubmit}
              validateMessages={validateMessages}
            >
              <Form.Item
                label="CIN"
                nom="cin"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setCin(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Libelle"
                nom="libelle"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setLibelle(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Description"
                nom="desc"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea style={{height:'150px'}}onChange={(e) => setDesc(e.target.value)} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                  Envoyer
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
                <TableList url="/api/service/" type="SERVICE" title={title} data={data}/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
