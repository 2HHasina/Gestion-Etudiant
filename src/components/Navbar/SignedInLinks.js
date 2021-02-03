import React from "react";
import styles from "../../style/NavBar.module.css";

const SignedInLinks = () => {
  return (
    <span className={`navbar-text ${styles.actions} ${styles.txt}`}></span>
  );
};

export default SignedInLinks;
