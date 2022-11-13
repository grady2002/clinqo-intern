import React, { Fragment } from "react";
import Switcher from "./components/Switcher";
import Form from "./components/Form";
import Med from "./assets/medicine.svg";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <div className="hero"></div>
      <h3 className="clinic_name">Clinic Name</h3>
      <div className="flex switch_container">
        <h4>Write patient prescription</h4>
        <Switcher />
        <h4>Access patient report</h4>
      </div>
      <Form />
      <img src={Med} alt="med pro" />
    </Fragment>
  );
};

export default App;
