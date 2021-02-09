import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";
import URL from "../../../config/config";

const title = ["ID", "Filiere"];

class ListFiliere extends Component {
  state = {
    data: [],
  };

  fetchData = () => {
    const res = axios({
      method: "get",
      url: `${URL}/api/filiere/list`,
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
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <TableList
        fetchData={this.fetchData}
        url="/api/filiere/"
        type="FILIERE"
        title={title}
        data={this.state.data}
      />
    );
  }
}

export default ListFiliere;
