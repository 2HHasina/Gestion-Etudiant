import React, { Component } from "react";
import TableList from "../../Util/TableList";

const title = ["ID", "Semestre"];

class ListSemestre extends Component {
  componentDidMount() {}

  state = {
    data: [
      {
        key: "1",
        id: "1",
        semestre: "Genie Informatique",
      },
      {
        key: "2",
        id: "2",

        semestre: "Genie Electrique",
      },
      {
        key: "3",
        id: "3",

        semestre: "Genie Reseau",
      },
      {
        key: "4",
        id: "4",

        semestre: "GIID",
      },
    ],
  };
  render() {
    return <TableList type="SEMESTRE" title={title} data={this.state.data} />;
  }
}

export default ListSemestre;
