import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logOut();
      // history.push("/login");
    } catch {}
  }

  return (
    <>
      <div style={{ color: "#fff", fontSize: "25px" }}>Dashboard</div>
      <span style={{ color: "#fff" }}> {currentUser.email} </span>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}
