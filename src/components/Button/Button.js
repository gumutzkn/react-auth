import React from "react";

import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <>
      <input
        className={styles.form__btn}
        type="submit"
        value={props.value}
      />
    </>
  );
}
