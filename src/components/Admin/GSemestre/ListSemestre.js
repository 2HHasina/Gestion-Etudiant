import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";

const title = ["ID", "Semestre"];

class ListSemestre extends Component {
  
  state = {
    data: [],
  };
  
  componentDidMount() {
    const res = axios({
      method: "get",
      url: "http://10.30.238.242:8080/api/semester/list",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>
          this.setState({
            data: [...this.state.data, { id: elm.id, semestre: elm.libelle }],
          })
        )
      )
      .catch((err) => console.log(err));
  }
  render() {
    return <TableList url="/api/semester/" type="SEMESTRE" title={title} data={this.state.data} />;
  }
}

export default ListSemestre;
