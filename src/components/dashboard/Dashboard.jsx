import React from "react";
import SideMenu from "../sidebar/SideMenu";
import "./dashboard.css"

export default function Dashboard() {
  return (
    <>
      <div className="dash_page">
        <div className="side">
          <SideMenu />  
        </div>
        <div className="dash">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
}
