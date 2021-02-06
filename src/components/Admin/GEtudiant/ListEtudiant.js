import React, { Component } from "react";
import TableAdd from "../../Util/TableAdd";

const columns = [
  {
    title: "CIN",
    dataIndex: "cin",
    key: "cin",
    width: "30%",
    ...this.getColumnSearchProps("cin"),
  },
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    width: "30%",
    ...this.getColumnSearchProps("nom"),
  },
  {
    title: "Prenom",
    dataIndex: "prenom",
    key: "prenom",
    width: "20%",
    ...this.getColumnSearchProps("prenom"),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    ...this.getColumnSearchProps("email"),
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <DeleteTwoTone twoToneColor="#eb2f96" />,
  },
];
class ListEtudiant extends Component {
  state = {
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Joe Black",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Jim Green",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
      },
    ],
  };
  render() {
    return <TableAdd columns={columns} data={this.state.data}/>;
  }
}

export default ListEtudiant;
