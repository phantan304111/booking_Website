//import thu vien
import React from "react";
import "./SearchPopup.css";
const SearchPopup = () => {
  // tao bang pop up
  return (
    <div className="Search_popup">
      <p className="Search_popup_title">Search</p>
      <p className="Search_popup_text">Destination</p>{" "}
      <input
        className="Search__popup_inputbig"
        type="text"
        placeholder=""
      ></input>
      <p className="Search_popup_text">Check-in Date</p>
      <input
        className="Search__popup_inputbig"
        type="text"
        placeholder="06/24/2022 to 06/24/2022"
      ></input>
      <p className="Search_popup_text">Option</p>
      {/* Div phan info duoi, set layout la grid voi 2 cot 5 hang, moi hang gom label thong tin va input tuong ung */}
      <div className="Search__popup_info">
      
          <p>Min price per night</p>
          <input
            className="Search__popup_input"
            type="number"
            placeholder=""
          ></input>
          <p>Max price per night</p>
          <input
            className="Search__popup_input"
            type="number"
            placeholder=""
          ></input>
          <p>Adult</p>
          <input
            className="Search__popup_input"
            type="number"
            placeholder=""
          ></input>
       
          <p>Children</p>
          <input
            className="Search__popup_input"
            type="number"
            placeholder=""
          ></input>
      
          <p>Room</p>
          <input
            className="Search__popup_input"
            type="number"
            placeholder=""
          ></input>
      </div>
      <button className="Search__popup_button">Search</button>
    </div>
  );
};
//export component
export default SearchPopup;
