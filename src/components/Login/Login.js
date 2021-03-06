import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "../../Form.module.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <div className={styles.form__container}>
      <h3>Welcome Back</h3>
      <h1>{props.text}</h1>
      {error && <h1 className={styles.error}>{error}</h1>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          htmlFor="email"
          label="E-mail"
          type="email"
          refs={emailRef}
          placeholder="Enter your e-mail"
        />
        <Input
          htmlFor="password"
          label="Password"
          type="password"
          refs={passwordRef}
          placeholder="Enter your password"
        />
        <Button value="Login now" />
        <span>
          Not registered yet?{" "}
          <Link to="/signup">
            Register <span> &#8594;</span>
          </Link>
        </span>
      </form>
    </div>
  );
}
