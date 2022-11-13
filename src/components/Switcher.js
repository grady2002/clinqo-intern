import React, { useState, Fragment } from "react";

const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div
        style={styles.main}
        className={toggle ? "active" : "inactive"}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div style={toggle ? styles.toggle : styles.not_toggle}></div>
      </div>
    </Fragment>
  );
};

const styles = {
  main: {
    width: "80px",
    height: "30px",
    backgroundColor: "#4b215d",
    borderRadius: "20px",
    position: "relative",
    cursor: "pointer",
  },
  not_toggle: {
    transition: "200ms ease-in-out",
    backgroundColor: "white",
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translate(0, -50%)",
    pointerEvents: "none",
  },
  toggle: {
    transition: "200ms ease-in-out",
    backgroundColor: "white",
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "70%",
    transform: "translate(0, -50%)",
    pointerEvents: "none",
  },
};

export default Switcher;
