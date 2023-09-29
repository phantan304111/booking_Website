import React, { useState } from "react";
import "./ReviewHotel.css";
const ReviewHotel = (props) => {
  //tao component review hotel voi layout gom img va info, voi du lieu tu props, dat lien ket hotel name den trang detail

  return (
    <div className="reviewhotel">
      <img src={props.image_url} className="hotel_img" />

      <a href="/detail" className="reviewhotel_textname">
        {props.name}{" "}
      </a>
      <p className="reviewhotel_textcity">{props.city} </p>
      <p className="reviewhotel_textprice"> starting from ${props.price} </p>
      <div className="reviewhotel_textlayout">
        <p className="reviewhotel_textrate">{props.rate} </p>
        <p className="reviewhotel_texttype">{props.type} </p>
      </div>
    </div>
  );
};
export default ReviewHotel;
