import React, { Component } from "react";
import TableList from "../../Util/TableList";
import { connect } from "react-redux";
import {GetUsers} from '../../../store/actions/usersAction'


const title = ["CIN","Nom","Prenom","Email"]

class ListEtudiant extends Component {
  componentDidMount(){
    this.props.GetUsers()
  }

  state = {
    data: [
      {
        key: "1",
        cin: "IB000",
        nom: "Anbari",
        prenom: "Amine",
        email: "amineanbari122@gmail.com",
      },
      {
        key: "2",
        cin: "IB111",
        nom: "Anbari",
        prenom: "Amine",
        email: "amineanbari122@gmail.com",
      },
      {
        key: "3",
        cin: "IB222",
        nom: "Anbari",
        prenom: "Amine",
        email: "amineanbari122@gmail.com",
      },
      {
        key: "4",
        cin: "IB333",
        nom: "Anbari",
        prenom: "Amine",
        email: "amineanbari122@gmail.com",
      },
    ],
  };
  render() {
    console.log(this.props.data)
    return <TableList type="USER" title={title} data={this.state.data} />;
  }
}

const mapStateToProps = (state) => ({data:state.users})

export default connect(mapStateToProps, {GetUsers})(ListEtudiant);
