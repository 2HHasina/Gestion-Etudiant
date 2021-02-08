import React, { Component } from "react";
import TableList from "../../Util/TableList";
import { connect } from "react-redux";
import { GetUsers } from "../../../store/actions/usersAction";
import axios from "axios";

const title = ["CIN", "Nom", "Prenom", "Email"];

class ListProf extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: "http://10.30.238.242:8080/api/users/list/PROF",
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

const mapStateToProps = (state) => ({ data: state.users });

export default connect(mapStateToProps, { GetUsers })(ListProf);
