import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";
import URL from '../../../config/config'


const title = ["CIN", "Nom", "Prenom", "Email"];

class ListProf extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: `${URL}/api/users/list/PROF`,
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


export default ListProf;
