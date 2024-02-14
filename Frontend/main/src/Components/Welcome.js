import React, { useState , useEffect, useRef} from "react";
import "../CSS/Welcome.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Login from "./Login";

function Welcome({ Display, setStyle }) {
  function loadLogin() {
    setStyle(!Display);
  }



  return (
    <>
      <div  className={`Main ${Display ? "blurred" : ""}`}>
        <div className="TopDiv">
          <div className="WelcomeGreet">
            Welc<span className="singleLetterColor">o</span>me User,
          </div>
          <div className="WelcomeSubHeadline">
            Discover the perfect sellers tailored to your specific needs and
            experience swift,
            <br />
            efficient services from our curated list of top-notch vendors,
            ensuring a seamless and hassle-free process for all your
            requirements.
          </div>
        </div>
        <div className="divider"></div>

        <div className="BottomDiv">
          <div className="tryItNow">
            <button onClick={loadLogin}>Try it Now</button>
          </div>

          <div className="parentOfInfo">
            <div className="buyerInfo box">
              <p className="buyerHeading">Join as Buyer</p>
              <span>
                Sign up as a buyer and unlock the simplicity of discovering
                local merchants on our website. With our convenient pincode
                search feature, finding the right services in your area is a
                breeze. Just register, enter your pincode, and explore the
                available merchants tailored to your location. Embrace a
                straightforward and hassle-free buying experience by connecting
                directly with vendors near you. Welcome to a user-friendly
                platform where registering as a buyer and finding local services
                is made easy through our pincode search functionality!
              </span>
            </div>
            <div className="sellerInfo box">
              <p className="sellerHeading">Join as Seller</p>
              <span>
                Register as a seller and experience the ease of reaching local
                customers on our platform. Utilize our convenient pincode search
                feature to showcase your services in specific areas
                effortlessly. Simply sign up, enter your pincode, and connect
                with potential buyers in your targeted location. Enjoy a
                seamless and straightforward selling experience by reaching out
                directly to customers nearby. Welcome to our user-friendly
                platform, where registering as a seller and reaching local
                customers is simplified through our pincode search
                functionality!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
