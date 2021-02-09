import React, { Component } from "react";
import TableList from "../../Util/TableList";
import URL from '../../../config/config'
import axios from "axios";

const title = ["ID", "Cours"];

class ListCours extends Component {
    state = {
      data: [],
    };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: `${URL}/api/cours/list`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>
          this.setState({
            data: [
              ...this.state.data,
              {
                id: elm.id,
                cours: elm.libelle
              },
            ],
          })
        )
      )
      .catch((err) => console.log(err));
  }

  render() {
    return <TableList url="/api/cours/" type="COURS" title={title} data={this.state.data} />;
  }
}

export default ListCours;
