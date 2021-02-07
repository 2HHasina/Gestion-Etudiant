import React, { Component } from "react";
import TableList from "../../Util/TableList";

const title = ["ID", "Cours",""];

class ListCours extends Component {
    state = {
      data: [
        {
          key: "1",
          id: "1",
          cours: "Premiere Annee",
        },
        {
          key: "2",
          id: "2",
          cours: " 3 eme genie informatique",
        },
      ],
    };
  componentDidMount() {}

  render() {
    return <TableList title={title} data={this.state.data} />;
  }
}

export default ListCours;
