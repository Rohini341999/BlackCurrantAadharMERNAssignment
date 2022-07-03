import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

function AadharCardCreation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [state, setState] = useState("");

  const submittedAadharDetails = () => {
    Axios.post("http://localhost:3001/aadharCreation", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      password: password,
      homeAddress: homeAddress,
      state: state,
    }).then((response) => console.log(response, "response on submitting"));
  };

  return (
    <>
      <h2>Enter Aadhar Details.</h2>
      <form action="/aadharCreation" onSubmit={submittedAadharDetails}>
        <div className="column-parent">
          <div className="one-half">
            <span>First Name : </span>
            <input
              type="text"
              placeholder="First Name..."
              onChange={(e) => setFirstName(e.target.value)}
            />

            <span>Last Name : </span>
            <input
              type="text"
              placeholder="Last Name..."
              onChange={(e) => setLastName(e.target.value)}
            />

            <span>Phone Number : </span>
            <input
              type="number"
              placeholder="Phone Number..."
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <span>Email Address : </span>
            <input
              type="text"
              placeholder="Email Address..."
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="second-half">
            <span>Password : </span>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />

            <span>Home Address : </span>
            <input
              type="text"
              placeholder="Home Address..."
              onChange={(e) => setHomeAddress(e.target.value)}
            />

            <span>State : </span>
            <input
              type="text"
              placeholder="State..."
              onChange={(e) => setState(e.target.value)}
            />

            <button className="aadhar-submit-btn" type="submit">
              Submit Details
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AadharCardCreation;
