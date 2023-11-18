import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import SideMenu from "../sidebar/SideMenu";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="home_page">
        <div className="sidebar_section">
          <SideMenu />
        </div>
        <div className="hero_section">
          <h1>Welcome to this Home page..!</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
