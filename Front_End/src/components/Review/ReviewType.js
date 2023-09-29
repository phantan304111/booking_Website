import React, { useState } from "react";
import "./ReviewType.css";
const ReviewType = (props) => {
      //tao component review type voi layout gom img va info, voi du lieu tu props

  return (
    <div className="reviewtype">
      <img src={props.image} className="type_img" />

      <p className="reviewtype_textname">{props.name} </p>
      <div className="reviewtype_text">{props.count} hotels </div>
    </div>
  );
};
export default ReviewType;
