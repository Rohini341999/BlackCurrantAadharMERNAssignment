import React, { useState } from "react";
import { Card } from "antd";
import { Link ,Redirect} from "react-router-dom";
import Axios from "axios";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const userLogin = () => {
Axios.post("http://localhost:3001/userLogin",{username : username,password : password}).then((response) => console.log(response.status,"res.status",response.statusText))
}

  return (
    <div className="login-aadhar-containers">
      <Card hoverable>
        <h4>Login</h4>
        <form action='/aadharCreation' onSubmit={userLogin}>
        <span> Username : </span>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <span> Password : </span>
        <input
          type="text"
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
