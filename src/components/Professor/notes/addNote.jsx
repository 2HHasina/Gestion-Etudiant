import React,{useState,useEffect} from 'react'
import {Form, Button, Select, message,PageHeader, InputNumber} from 'antd';
import jwt_decode from "jwt-decode";
import URL from '../../../config/config'
import axios from "axios";



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

export const AddNote = ()=>{


    const [form] = Form.useForm();
   const [modules,setModules]=useState([])
    const [idModule, setIdModule] = useState(0);
    const [student,setStudent] = useState([])
    const [idStudent,setIdStudent] = useState(0);
    const [idNiveau,setIdNiveau] = useState(0);


    useEffect(()=>{
        let decode = jwt_decode(localStorage.getItem("token"));
    axios({
            method :"get",
            url:`${URL}/api/module/list/${decode.sub}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
        }).then(res => setModules(res.data))
        .catch(err=> console.log(err))
    },[])

    useEffect(()=>{

       axios({
            method :"get",
            url:`${URL}/api/users/listByNiveau/${idNiveau}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
        }).then(res => setStudent(res.data))
        .catch(err=> console.log(err))

    },[idNiveau])

    const onChangeModule=(id)=>{
        setIdModule(id)
        modules.map(module=>{
            if(module.id ===id)
                setIdNiveau(module.semester.niveau.id)
        })
    }

    const onFinish = values =>{
        
      axios({
        method: "post",
        url: `${URL}/api/note/`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          module: values.module,
          student:values.etudiant,
          note:values.note
        },
      })
        .then((res) => {
         message.success("Note ajouté")
        })
        .catch((err) => {message.error('error occured please try again')});
    }

    return(
        <div>
            <PageHeader
        className="site-page-header"
        title="Saisir la note"
        subTitle="de chaque etudiant"
      /> 
      <div className="container">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          form={form}
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
              onChange={(id) => onChangeModule(id)}
              options={
                modules.length !== 0 &&
                modules.map((elm) => ({ label: elm.libelle, value: elm.id }))
              }
            />
          </Form.Item>
          <Form.Item
           label="Etudiant"
           name="etudiant"
           rules={[
             {
               required: true,
             },
           ]}
          >
          <Select
              defaultValue=""
              //style={{ width: 120 }}
              onChange={(id) => setIdStudent(id)}
              options={
                student.length !== 0 &&
                student.map((elm) => ({ label: `${elm.firstName} ${elm.lastName}`, value: elm.id }))
              }
            />
          </Form.Item>
              <Form.Item
              label="Note "
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
              >
                <InputNumber min={0} />
              </Form.Item>


<Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
           Ajouter note
          </Button>
        </Form.Item>     
        </Form>
      </div>
        </div>
    )
}