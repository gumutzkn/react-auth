import React from "react";
import Form from "../Form/Form";

import styles from "./FormContainer.module.scss";

export default function FormContainer(props) {
  return (
    <div className={styles.form__container}>
      <h3>Welcome Back</h3>
      <h1>{props.text}</h1>
      <Form />
    </div>
  );
}
