import React from "react";
import SideMenu from "../../sidebar/SideMenu";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <div className="main_price">
        <div className="side-box">
          <SideMenu />
        </div>
        <div className="content-box">
          <div className="content-box2">
            <form>
              <h1>PASSCODE</h1>
              <div className="passcode-box">
                <label htmlFor="passcode">Enter Your Passcode</label>
                <input type="password" placeholder="Passcode" />
              </div>
              <button type="submit" className="btn-box">
                Check Passcode
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
