import React,{useState,useEffect} from 'react'
import {Form,  Button, Select, message,PageHeader, InputNumber} from 'antd';
import jwt_decode from "jwt-decode";
import URL from '../../../config/config'
import axios from "axios";
import TableList from '../../Util/TableList'



  const title = ["Student", "Note", "Module"];

export const ListNotes = ()=>{

    const [modules,setModules]=useState([])
    const [idModule, setIdModule] = useState(0);
    const [notes,setNotes] = useState([])

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
             url:`${URL}/api/note/listBy/${idModule}`,
             headers: {
                 Authorization: "Bearer " + localStorage.getItem("token"),
               },
         }).then(({data}) => data.map(a=> setNotes(notes=>[...notes,{
            student:`${a.student.firstName} ${a.student.lastName}`,
            module:a.module.libelle,
            note:a.note
        }])))
         .catch(err=> console.log(err))
 
     },[idModule])

    
    return(
    
        <div>
            <PageHeader
        className="site-page-header"
        title="Liste d'absence "
        subTitle="pour chaque module"
      /> 
        <Form.Item
            label="MODULE"
            name="module"
            style={{paddingTop:20,width:300}}
          >
            <Select
              defaultValue=""
              
              onChange={(id) => {setIdModule(id);setNotes([])}}
              options={
                modules.length !== 0 &&
                modules.map((elm) => ({ label: elm.libelle, value: elm.id }))
              }
            />
          </Form.Item>
          <TableList title={title} data={notes}/>
        </div>
    )
}