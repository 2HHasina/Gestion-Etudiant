import React, { Component } from 'react'
import AddUser from "../../Util/AddUser"

class AddProf extends Component {

    render() {
        return (
            <AddUser label="CIN" type="USER" role={'PROFESSEUR'}/>
        )
    }
}

export default AddProf