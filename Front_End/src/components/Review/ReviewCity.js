import React, { useState } from "react";
import "./ReviewCity.css";
import images from "../../City Image/images";


const ReviewCity = (props) => {
  const image = props.image;
  console.log(typeof(image));
  // src={props.image}
  // const images = "../../City Image/images"
  //tao component review city voi layout gom img va 2 phan text, voi du lieu tu props
  return (
    <div className="reviewcity">
      <img src={props.image} className="city_img" />
      <p className="reviewcity_text">{props.subText} </p>
      <p className="reviewcity_textname">{props.name} </p>
    </div>
  );
};
export default ReviewCity;
