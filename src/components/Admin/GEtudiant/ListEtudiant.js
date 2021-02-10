import React, { Component } from "react";
import TableList from "../../Util/TableList";
import URL from "../../../config/config"

import axios from "axios";

const title = ["CIN", "Nom", "Prenom", "Email"];

class ListEtudiant extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: `${URL}/api/users/list/STUDENT`,
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
                cin: elm.cin,
                nom: elm.lastName,
                prenom: elm.firstName,
                email: elm.email,
              },
            ],
          })
        )
      )
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.props.data);
    return <TableList type="USER" title={title} data={this.state.data} />;
  }
}

export default ListEtudiant;
