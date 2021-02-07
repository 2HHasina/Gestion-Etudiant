import React, { Component } from "react";
import AddUser from "../../Util/AddUser";

class AddSemestre extends Component {
  render() {
    return (
      <div>
        <AddUser label="SEMESTRE" type="SEMESTRE" role={"SEMESTRE"} />
      </div>
    );
  }
}

export default AddSemestre;
