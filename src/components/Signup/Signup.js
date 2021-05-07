import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useAuth } from "../../contexts/AuthContext";

import styles from "../../Form.module.scss";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <div className={styles.form__container}>
      <h3>Welcome to My Website</h3>
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
        <Button value="Sign Up" />
        <span>
          Already have an account?{" "}
          <Link to="/login">
            Login <span> &#8594;</span>
          </Link>
        </span>
      </form>
    </div>
  );
}
