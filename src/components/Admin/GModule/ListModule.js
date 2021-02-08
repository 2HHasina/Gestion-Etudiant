import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";

const title = ["ID", "Module"];

class ListModule extends Component {
  
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: "http://10.30.238.242:8080/api/module/list",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>
          this.setState({
            data: [...this.state.data, { id: elm.id, filiere: elm.libelle }],
          })
        )
      )
      .catch((err) => console.log(err));
  }
  render() {
    return <TableList type="MODULE" title={title} data={this.state.data} />;
  }
}

export default ListModule;
