import React, { Fragment } from "react";

const Input = ({ value, on_change, placeholder }) => {
  return (
    <Fragment>
      <input
        type="text"
        value={value}
        onChange={on_change}
        placeholder={placeholder}
      />
      <br />
    </Fragment>
  );
};

export default Input;
