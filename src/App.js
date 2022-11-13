import React, { Fragment } from "react";
import Switcher from "./components/Switcher";
import Form from "./components/Form";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <h3 className="clinic_name">Clinic Name</h3>
      <div className="flex switch_container">
        <h4>Patient with prescription</h4>
        <Switcher />
        <h4>Access patient report</h4>
      </div>
      <Form />
    </Fragment>
  );
};

export default App;
