import React, { Fragment, useState } from "react";
import Input from "./Input";

const Form = () => {
  const [patientName, setPatientName] = useState("");
  const [patientID, setPatientID] = useState("");
  const [patientContact, setPatientContact] = useState("");
  const [patientGender, setPatientGender] = useState("");
  return (
    <Fragment>
      <div className="form">
        <div className="input_container">
          <Input
            value={patientName}
            on_change={(e) => {
              setPatientName(e.target.value);
            }}
            placeholder="Patient Name"
          />
          <Input
            value={patientID}
            on_change={(e) => {
              setPatientID(e.target.value);
            }}
            placeholder="Patient ID"
          />
          <Input
            value={patientContact}
            on_change={(e) => {
              setPatientContact(e.target.value);
            }}
            placeholder="Patient Contact Number"
          />
          <Input
            value={patientGender}
            on_change={(e) => {
              setPatientGender(e.target.value);
            }}
            placeholder="Patient Gender"
          />
        </div>
        <button>Confirm Details</button>
      </div>
    </Fragment>
  );
};

export default Form;
