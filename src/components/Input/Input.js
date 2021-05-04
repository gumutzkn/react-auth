import React from "react";

import styles from "./Input.module.scss";

export default function Input({
  htmlFor,
  label,
  placeholder,
  name,
  type,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        className={styles.form__input}
        type={type}
      />
    </>
  );
}
