import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function Searchbar() {
  const [data, setData] = useState(true);
  const [state, setState] = useState(false);
  const [inpVal, setInp] = useState("");

  async function handleData(event) {
    event.preventDefault();
    await axios
      .get(
        `http://localhost:5000/api/search/searchpincode?pincodeToSearch=${parseInt(
          inpVal
        )}`
      )

      .then((response) => {
        if (isNaN(inpVal)) {
          alert("Enter the Number");
        }
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //   const response = await axios.get("http://localhost:5000/api/seller", {
    //     email,
    //     password

    //   })

    //     console.log(state);
    // }
  }

  console.log(state);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input matches the pattern before updating the state
    if (/^[0-9]{0,6}$/.test(inputValue)) {
      setInp(inputValue);
    }
  };

  console.log(inpVal);

  return (
    <>
      <div className={`Main`}>
        <div className="TopDiv">
          <div className="WelcomeGreet">
            SEARCH<span className="singleLetterColor"> Merchants</span>
          </div>
          <div className="WelcomeSubHeadline">
            Discover the perfect sellers tailored to your specific needs and
            experience swift, <br />
            efficient services from our curated list of top-notch vendors,
            ensuring a seamless and hassle-free process for all your
            requirements.
          </div>
        </div>
        <div className="divider"></div>

        <div className="BottomDiv">
          <div className="upperBottomDiv">
            <div>
              <form action="#">
                <div className="formFlex">
                  <input
                    type="text"
                    pattern="[0-9]{6}"
                    title="Please enter a 6-digit number"
                    maxLength="6"
                    placeholder="Enter 6-digit number"
                    className="inputBar"
                    onChange={handleChange}
                    value={inpVal}
                  />
                  <div className="searchButton">
                    <button type="submit" onClick={handleData}>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dataContainer">
            <div id="bgOfHeader">
              <div className="gridItem">Sr</div>
              <div className="gridItem">Name of Seller</div>
              <div className="gridItem">Email</div>
            </div>
            <div
              className="dataDiv"
              style={{ display: state ? "grid" : "block" }}
            >
              {state ? (
                state.sellers.map((user, index) => (
                  <>
                    <div className="dataList">{index + 1}</div>
                    <div className="dataList">{user.companyName}</div>
                    <div className="dataList">{user.email}</div>
                  </>
                ))
              ) : (
                <div>No data Available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Searchbar;
