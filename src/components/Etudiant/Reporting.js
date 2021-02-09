import React, { Component } from "react";
import NoteChart from "./ApexChart";
import AbsenceChart from './AbsenceChart'

class Reporting extends Component {
  render() {
    return (
      <div>
        <NoteChart />
        <AbsenceChart />
      </div>
    
    );
  }
}

export default Reporting;
