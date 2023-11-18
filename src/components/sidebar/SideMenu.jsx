import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaWarehouse,
  FaFile,
} from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdKey } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import "./style.css";

const SideMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "home",
      icon: <HomeIcon />,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Institutions",
      name: "Institutions",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/Pricing",
      name: "Pricing",
      icon: <AiOutlineDollarCircle />,
    },
    {
      path: "/Billing",
      name: "Billing",
      icon: <FaFile />,
    },
    {
      path: "/Invoice",
      name: "Invoice",
      icon: <FaFileInvoice />,
    },
    {
      path: "/Password",
      name: "Change Password",
      icon: <MdKey />,
    },
    {
      path: "/Complier",
      name: "Complier Test",
      icon: <FaWarehouse />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo1">
            Skill <span>Hub</span>
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <h6>Hello</h6>
      </div>
      {children}
    </div>
  );
};
export default SideMenu;
