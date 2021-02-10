import React, { Component } from "react";
import AddUser from "../../Util/AddUser";

class AddEtudiant extends Component {
  render() {
    return (
      <div>
        <AddUser label="CIN" type="USER" role="STUDENT" />
      </div>
    );
  }
}

export default AddEtudiant;
