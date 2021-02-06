import React, { Component } from "react";
import TableList from "../../Util/TableList";

const title = ["ID", "Description"];

class ListNiveau extends Component {
  componentDidMount() {}

  state = {
    data: [
      {
        key: "1",
        id: "1",
        description: "Premiere Annee",
      },
      {
        key: "2",
        id: "2",
        description: " 3 eme genie informatique",
      },
    ],
  };
  render() {
    return <TableList title={title} data={this.state.data} />;
  }
}

export default ListNiveau;
