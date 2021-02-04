import React, { Component } from "react";
import AddUser from "../../Util/AddUser";

class AddEtudiant extends Component {
  render() {
    return (
      <div>
        <AddUser role={"ETUDIANT"} />
      </div>
    );
  }
}

export default AddEtudiant;
