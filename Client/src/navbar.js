import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // function showSidebar() {
  //   setSidebar(!sidebar);
  //   //console.log("hi");
  // }
  return (
    <>
      <div className=" navbar">
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <h1>Brand</h1>
              </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
