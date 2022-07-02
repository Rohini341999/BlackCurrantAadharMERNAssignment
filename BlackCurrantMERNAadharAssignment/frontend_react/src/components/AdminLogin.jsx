import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios"
import "../App.css";
function AdminLogin() {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const adminLogin = () => {
    Axios.post("http://localhost:3001/adminLogin",{adminUsername : adminUsername,adminPassword : adminPassword}).then((response) => console.log(response.status,"res.status",response.statusText))
    }

  return (
    <div className="login-aadhar-containers">
      <Card hoverable>
      <form action='/aadharInfoDisplay' onSubmit={adminLogin}>
        <h4>Admin Login</h4>
        <span> Username : </span>
        <input type="text" placeholder="Username..." onChange={(e) => setAdminUsername(e.target.value)}></input>
        <span> Password : </span>
        <input type="text" placeholder="Password..." onChange={(e) => setAdminPassword(e.target.value)}></input>
        <button
          style={{ float: "right" }}
          className="aadhar-submit-btn"
          type="submit"
        >
          Login
        </button>
        </form>
      </Card>
      <Link to="/aadharCreation">Create new Aadhar Card</Link>
    </div>
  );
}

export default AdminLogin;
