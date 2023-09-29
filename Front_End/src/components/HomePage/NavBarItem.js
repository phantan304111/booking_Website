import React from "react";
import "./NavBar.css";
const NavBarItem = (props) => {
  //  console.log(props);
  //kiem tra xem thuoc tinh active co true, return theo dieu kien tuong ung
  if (props.active == true) { 
  // truyen cac bien du lieu vao component
    return (
      <div className="navbar_items check">
        <i className={`fa ${props.icon}`}></i>
        <div>{props.type}</div>
      </div>
    );
  } else {
    return (
      <div className="navbar_items">
        <i className={`fa ${props.icon}`}></i>
        <div>{props.type}</div>
      </div>
    );
  }
};
//export component
export default NavBarItem;
