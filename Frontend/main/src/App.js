import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Searchbar from "./Components/Searchbar";
import { Routes, Route } from "react-router-dom";
// CSS files
import "./CSS/MediaQueries.css";
import "./CSS/Navbar.css";
import "./CSS/Welcome.css";
import "./CSS/Login.css";
import "./CSS/Footer.css";
import "./CSS/Aboutus.css";
import "./CSS/SearchBar.css";
import "./App.css";
import Registration from "./Components/Registration";

function App() {
  const [Display, setStyle] = useState(false);

  const [isLogin, setLogin] = useState(true);
  console.log(isLogin);

  return (
    <>
      <div className="container">
        <Navbar Display={Display} isLogino={isLogin} setStyle={setStyle} />
        <Login Styling={Display} setStyle={setStyle} /> 
        <Routes>
          {isLogin ? (
            <Route
              path="/"
              element={<Searchbar Display={Display} setStyle={setStyle} />}
            />
          ) : (
            <Route
              path="/"
              element={<Welcome Display={Display} isLogin = {isLogin} setStyle={setStyle} />}
            />
          )}

          <Route
            path="About"
            element={<Aboutus Display={Display} setStyle={setStyle} />}
          />
           <Route
            path="register"
            element={<Registration  setLogin={setLogin}/>}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
