import React,{Component, useState} from 'react'
import jwt_decode from "jwt-decode";
import URL from '../../config/config'
import axios from "axios";
import TableList from '../Util/TableList'

const title = ["Module", "Semestre", "Niveau", "Filiere"];
class Modules extends Component{

    state={
        data:[],
    };



    componentDidMount(){

        let decode = jwt_decode(localStorage.getItem("token"));
       
        const res = axios({
            method :"get",
            url:`${URL}/api/module/list/${decode.sub}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
        }).then(res => res.data.map(module=>
        
            this.setState({
                data:[
                    ...this.state.data,
                    {
                        module:module.libelle,
                        semestre:module.semester.libelle,
                        niveau:module.semester.niveau.descNiveau,
                        filiere:module.semester.niveau.filiere.libelle
                    } 
                ]
            })))
        .catch(err=> console.log(err))
    }

    render(){
        return <TableList title={title} data={this.state.data} />
    }
}

export default Modules;