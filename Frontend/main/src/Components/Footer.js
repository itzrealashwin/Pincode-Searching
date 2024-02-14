import React from "react";
import logo from "./logoBottom.png"; // with import
import "../CSS/Footer.css";
function Footer() {
  return (
    
      <footer>
        <div className="footerBg">
          <div className="logoBottom">
            <img src={logo} alt="" className="logoImg" />
          </div>
          <div className="footerLine">
            © 2024 Return Code. All rights reserved.
          </div>
        </div>
        </footer>
    
  );
}

export default Footer;
