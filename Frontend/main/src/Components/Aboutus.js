import React, { useEffect } from "react";

const Aboutus = ({ Display, setStyle }) => {
  useEffect(() => {
    setStyle((Display = false));
  }, []);

  return (
    <div className={`Main ${Display ? "blurred" : ""}`}>
      <div className="TopDiv">
        <div className="WelcomeGreet">About Our Site !,</div>
        <div className="WelcomeSubHeadline">
          Experience instant shopping bliss as you effortlessly locate nearby
          sellers in a snap! <br />
          Explore 30,000 pincode options and connect with 1 million merchants
          for a swift, easy, and enjoyable online shopping journey.
        </div>
      </div>
      <div className="divider"></div>

      <div className="BottomDiv">
        <div className="BottomMainDiv">
          <div className="boxesOfAdv">
            <div className="boxOfList div1">
              <div id="buyerHeadingAboutus">For Buyers</div>
              <div className="listContainer">
                <ul>
                  <li className="buyerListOfAdv">
                    <b>Effortless Search</b>: Quickly find nearby merchants in
                    your desired pincode.
                  </li>
                  <li className="buyerListOfAdv">
                    <b>Instant Results</b>: Enter your pincode, and our advanced
                    search provides a ready-to-deliver merchant list.
                  </li>
                  <li className="buyerListOfAdv">
                    <b>Convenience Redefined</b>: No more tedious searches –
                    just fast, easy access to the services you need.
                  </li>
                </ul>
              </div>
            </div>
            <div className="boxOfList div2">
              <div id="sellerHeadingAboutus">For Sellers</div>
              <div className="listContainer">
                <ul>
                  <li className="sellerListOfAdv">
                    <b>Efficient Connectivity </b>: Sellers log in to connect
                    with a vast network of potential customers.
                  </li>
                  <li className="sellerListOfAdv">
                    <b>Pinpoint Targeting</b>: Reach buyers specifically
                    interested in your services within designated pincode areas.
                  </li>
                  <li className="sellerListOfAdv">
                    <b>Streamlined Interactions</b>: Our platform ensures quick
                    and seamless connections, allowing you to focus on
                    delivering exceptional products or services.
                  </li>
                </ul>
              </div>
            </div>
            <div className="boxOfList div3">
              <div id="performanceExcellence">Performance Excellence</div>
              <div className="listContainer">
                <ul>
                  <li className="performanceListOfAdv">
                    <b>Tech Excellence</b>: Our Website handles 30K pincodes, 1M
                    merchants – swift results, no compromise.
                  </li>
                  <li className="performanceListOfAdv">
                    <b>Tailored Efficiency</b>: Whether a buyer or seller,
                    experience seamless interactions at our website
                  </li>
                  <li className="performanceListOfAdv">
                    <b>Join Now</b>: Future-proof your online commerce journey –
                    where speed meets satisfaction!
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="WhatWeDO">
            <div id="whatWeDOHeading">What we do?</div>
            <div id="whatwedocontent">
              <p className="paragraph">
                <b>Return</b>
                <sup>Code</sup> is your solution for swift merchant discovery!
                Buyers effortlessly find delivery options by entering their
                pincode, enhancing the shopping experience. Sellers benefit from
                targeted connections with potential customers in specific
                pincode areas upon login.
              </p>
              <p className="paragraph">
                Our platform's efficiency is driven by cutting-edge technology,
                capable of managing a robust 30,000 x 1 million data matrix of
                pincodes and merchants. Prioritizing speed, users receive
                instant results, ensuring a seamless interaction.
              </p>
              <p className="paragraph">
                Whether you're a buyer seeking convenience or a seller aiming
                for visibility, Our Website is designed to meet your needs
                efficiently. Experience the future of online commerce by joining
                us – where data retrieval is lightning-fast for an unparalleled
                user experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
