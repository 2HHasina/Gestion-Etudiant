import React, { Component } from "react";
import TableList from "../../Util/TableList";

const title = ["ID", "Module"];

class ListModule extends Component {
  componentDidMount() {}

  state = {
    data: [
      {
        key: "1",
        id: "1",
        module: "Genie Informatique",
      },
      {
        key: "2",
        id: "2",

        module: "Genie Electrique",
      },
      {
        key: "3",
        id: "3",

        module: "Genie Reseau",
      },
      {
        key: "4",
        id: "4",

        module: "GIID",
      },
    ],
  };
  render() {
    return <TableList type="MODULE" title={title} data={this.state.data} />;
  }
}

export default ListModule;
