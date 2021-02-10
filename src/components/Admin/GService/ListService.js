import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";
import URL from '../../../config/config'


const title=["ID","Service"]

class ListService extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: `${URL}/api/service/list/`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>{

          if(elm.status==="En cours de traitement")
            this.setState({
              data: [
                ...this.state.data,
                {
                  id: elm.id,
                  service: elm.libelle,
                  
                },
              ],
            })}
          )
        
      )
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.props.data);
    return <TableList type="SERVICE" title={title} data={this.state.data}/>;
  }
}


export default ListService;
