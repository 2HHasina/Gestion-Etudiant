import React, { Component } from "react";
import NoteChart from "./ApexChart";
import AbsenceChart from './AbsenceChart'
import axios from "axios";
import jwt_decode from 'jwt-decode'
import URL from '../../config/config'
import { message } from "antd";

class Reporting extends Component {

  state ={
    note:[],
    absence:[],
    moduleNote:[],
    moduleAbsence:[],
  }
  getNote=(data)=>{
    data.map(elm=>{
      this.setState({
        note:[...this.state.note,elm.note],
        moduleNote:[...this.state.moduleNote,elm.module.libelle]
      })
    })
  }
  getAbsence = (data)=>{
    console.log(data)
    data.map(elm=>{
      this.setState({
        absence:[...this.state.absence,elm.nbAbsence],
        moduleAbsence:[...this.state.moduleAbsence,elm.module.libelle]
      })
    })
  }
  componentDidMount(){
    let decode = jwt_decode(localStorage.getItem('token'))
    axios({
      method:'get',
      url:`${URL}/api/note/list/${decode.sub}`,
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    })
    .then(res=>this.getNote(res.data))
    .catch(err=>message.error(err.response.data.message))
    
    axios({
      method:'get',
      url:`${URL}/api/absence/list/${decode.sub}`,
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    })
    .then(res => this.getAbsence(res.data))
    .catch(err=>message.error(err.response.data.message))
  }

  render() {
    return (
      <div>
        <NoteChart note={this.state.note} module={this.state.moduleNote}/>
        <AbsenceChart absence={this.state.absence} module={this.state.moduleAbsence}/>
      </div>
    
    );
  }
}

export default Reporting;
