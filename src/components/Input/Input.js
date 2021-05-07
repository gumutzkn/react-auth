import React from "react";

import styles from "./Input.module.scss";

export default function Input({
  htmlFor,
  label,
  placeholder,
  type,
  refs,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        placeholder={placeholder}
        className={styles.form__input}
        type={type}
        ref={refs}
      />
    </>
  );
}
