import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Form.module.scss";

export default function Form() {
  return (
    <form className={styles.form}>
      <Input
        htmlFor="email"
        label="E-mail"
        name="email"
        type="email"
        placeholder="Enter your e-mail"
      />
      <Input
        htmlFor="password"
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button value="Login now" />
    </form>
  );
}
