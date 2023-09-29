import React from "react";
import NavBarItem from "./NavBarItem";
import { NavLink, useLocation } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
const location = useLocation();
console.log(location.pathname);
  return (
    <div className="navbar">
      {/* Tao phan Title va 2 nut cho Navbar */}
      <div className="navbar_head">
        <div className="navbar_text">Booking </div>
        <div className="navbar_head_login">
          <button  className="navbar_button"><NavLink to={"/sign_up"}>Register</NavLink></button>
          <button  className="navbar_button"><NavLink to={"/sign_in"}>Login</NavLink></button>


        </div>
      </div>
      {/* Tao 1 NavBar item cho moi thanh phan Navbar cua data */}
    {  (location.pathname !==("/sign_up")&&location.pathname !== "/sign_in")&&    
     (<div className="navbar_items_layout">
        {props.items.map((expense) => (
          <NavBarItem
            key={expense.type}
            type={expense.type}
            icon={expense.icon}
            active={expense.active}
          />
        ))}
      </div>)}
    </div>
  );
};
//export component
export default NavBar;
