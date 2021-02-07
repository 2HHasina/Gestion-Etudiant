import React, { Component } from "react";
import TableList from "../../Util/TableList";

const title = ["ID", "Filiere"];

class ListFiliere extends Component {
  componentDidMount() {}

  state = {
    data: [
      {
        key: "1",
        id: "1",
        filiere: "Genie Informatique",
      },
      {
        key: "2",
        id: "2",

        filiere: "Genie Electrique",
      },
      {
        key: "3",
        id: "3",

        filiere: "Genie Reseau",
      },
      {
        key: "4",
        id: "4",

        filiere: "GIID",
      },
    ],
  };
  render() {
    return <TableList type="FILIERE" title={title} data={this.state.data} />;
  }
}

export default ListFiliere;
