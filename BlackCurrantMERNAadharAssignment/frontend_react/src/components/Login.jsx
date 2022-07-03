import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../App.css";

function Login() {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = () => {
    Axios.post("http://localhost:3001/userLogin", {
      emailID: emailID,
      password: password,
    }).then((response) =>
      console.log(
        response.status,
        "res.status",
        response.statusText,
        "response",
        response
      )
    );
  };

  return (
    <div className="login-aadhar-containers">
      <Card hoverable>
        <h4>Login</h4>
        <form action="/userLoggedInDetails" onSubmit={userLogin}>
          <span> Email ID : </span>
          <input
            type="text"
            placeholder="Email ID..."
            onChange={(e) => setEmailID(e.target.value)}
          ></input>
          <span> Password : </span>
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            style={{ float: "right" }}
            className="aadhar-submit-btn"
            type="submit"
          >
            Login
          </button>
        </form>
      </Card>
      <Link to="/adminLogin">Click here to login if you are an admin</Link>
    </div>
  );
}

export default Login;
