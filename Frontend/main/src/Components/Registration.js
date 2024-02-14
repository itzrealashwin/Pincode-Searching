import React, { useState } from "react";
import "../CSS/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration({setLogin}) {
  const [companyName, setCompanyName] = useState("FaceBook");
  const [email, setEmail] = useState("facebook@gmail.com");
  const [password, setPassword] = useState("efgh");
  const [pincodeIndices, setPincodeIndices] = useState("789101");
  const navigate = useNavigate();
  async function createAcc() {
    const response = await axios.post("http://localhost:5000/api/seller", {
      companyName,
      email,
      password,
      pincodeIndices,
    });

    
    const token = response.data.token;
    localStorage.setItem("sellerToken", token);
    setLogin(true);
    navigate("/")
  }   
  return (
    <span
      className="glass-container"
      style={{
        backgroundColor: "#2B0D68",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%232B0D68' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%235b3680' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%2385619a' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ac8fb6' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23d1bfd3' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23F3F2F3' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      id="InnerDiv"
    >
      <div className="login-box">
        <h2 id="login-heading">Create Account</h2>
        <form id="login-form" action="/"onSubmit={createAcc}>
          <input
            type="text"
            id="username"
            className="input-field"
            name="Email Address"
            required=""
            placeholder="Enter Email"
          />
          <input
            type="text"
            id="name"
            className="input-field"
            name="Name"
            required=""
            placeholder="Full Name"
          />
          <input
            type="text"
            id="password"
            className="input-field"
            name="password"
            required=""
            placeholder="Password"
          />
          <input
            type="text"
            id="cnfrm-password"
            className="input-field"
            name="cnfrm-pass"
            required=""
            placeholder="Confirm Password"
          />

          <div className="radio-toolbar">
            <input
              type="radio"
              id="typeBuyer"
              className="radio-field"
              name="typeOfUser"
              required=""
              placeholder="Buyer"
              value="Buyer"
            />
            <label htmlFor="typeBuyer">Buyer</label>
            <input
              type="radio"
              id="typeSeller"
              className="radio-field"
              name="typeOfUser"
              required=""
              placeholder="Seller"
              value="Seller"
            />
            <label htmlFor="typeSeller">Seller</label>
          </div>
          <button type="submit">
            <div className="radius">
              <div
                className="ringOfBtn"
                style={{ background: "transperent", marginTop: "20px" }}
              >
                Register
              </div>
            </div>
          </button>
        </form>
      </div>
    </span>
  );
}

export default Registration;
