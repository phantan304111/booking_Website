//import thu vien lien quan
import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";

const Header = (props) => {
  //ham chuyen doi trang sang search
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const changepage = () => {
    window.location.replace("./search");
  };
  return (
    <div className="Header">
      {/* div phan Title */}
      <div className="Header_content">
        <h2 className="Header__h2">A Lifetime of discount? It's Genius.</h2>
        <div className="Header__text">
          Get reward for your travels - unlock instant savings of 10% or more
          with a free accounct
        </div>
        <button className="Header__button">Sign in / Register</button>
        {/* Phan input */}
        <form onSubmit={submitHandler} className="Header__searchbar">
          <div className="Header__searchbar_items">
            <i className={`	fa fa-bed`}></i>
            <input
              className="Header_input"
              type="text"
              hint="avc"
              placeholder="where are you going"
            />
          </div>
          <div className="Header__searchbar_items">
            <i className={`		fa fa-calendar`}></i>
            <input
              type="date"
              className="Header_input"
              placeholder={new Date()}
            />
            to
            <input
              type="date"
              className="Header_input"
              placeholder={new Date()}
            />
          </div>
          <div className="Header__searchbar_items">
            <i className={`		fa fa-female`}></i>
            <input
              type="text"
              className="Header_input"
              placeholder="1 adult . 0 children . 1 room"
            />
          </div>
          <button className="Header__button" onClick={changepage}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
//export component
export default Header;
