import React, { useState } from "react";
import "../CSS/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ Styling , setStyle}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function loginAuth() {
    const response = await axios.post("http://localhost:5000/api/seller", {
      email,
      password
      
    });

  
    console.log(password, email);
    setStyle(false)
    const token = response.data.token;
    localStorage.setItem("sellerToken", token);
    navigate("/")
    
  }  


  const handleEmail = (e) =>{
     let  emailTemp = e.target.value
     setEmail(emailTemp)
  }
  const handlePassword = (e) =>{
    let passwordTemp = e.target.value
    setPassword(passwordTemp)
 }
  
  
  return (
    <span
      style={{ display: Styling ? "inline" : "none" }}
      className="glass-container" id="InnerDiv"
    >
      <div className="login-box">
        <h2 id="login-heading">Login</h2>
        <form id="login-form" action="#" onSubmit={loginAuth} >
          <input
            type="text"
            id="username"
            className="input-field"
            name="username"
            required=""
            placeholder="Username"
            onChange={handleEmail}
          />
          <input
            type="password"
            id="password"
            className="input-field"
            name="password"
            required=""
            placeholder="Password"
            onChange={handlePassword}

          />

          <p className="message">
            Don't have an account? 
            <NavLink to="/register" id="register-link">
              Click Here to register
            </NavLink>
          </p>
          <button type="submit" >
              <div className="radius">
                <div className="ringOfBtn" style={{background: "transperent" , marginTop: "20px"}}>Login</div>
              </div>
            </button>
        </form>
      </div>
    </span>
  );
}

export default Login;
