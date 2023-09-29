//import thu vien lien quan
import React from "react";
import "./DetailInfo.css";

const DetailInfo = (props) => {
  // console.log(props.detail_data);
  //tao layout cho noi dung chinh // 3 div chua 3 khu vuc: title, imgs va description
  return (
    <div className="detail">
      {/*  div title */}
      <div className="detail_layout">
        <div className="detail_title_info">
          <p className="detail_name">{props.detail_data.name}</p>
          <p className="detail_address">{props.detail_data.address}</p>
          <p className="detail_distance">{props.detail_data.distance}</p>
          <p className="detail_price">{props.detail_data.price}</p>
        </div>
        <button className="detail_button">Reserve or book now!</button>
      </div>
{/*  tao layout grid, tao 1 hinh anh voi moi phan tu source trong data va dat vao grid*/}
      <div className="detail_img_layout">
        {props.detail_data.photos.map((expense) => {
          return (
            <div>
              <img src={expense} className="detail_img" />
            </div>
          );
        })}
      </div>
      {/* div description */}
      <div className="detail_info_layout">
        <div className="detail_info_block">
          <p className="detail_title">{props.detail_data.title}</p>
          <p className="detail_description">{props.detail_data.description}</p>
        </div>
        <div className="detail_info_smallblock">
          <p className="detail_info_smallblock_title">
            Perfect for 9 night stay!
          </p>
          <p className="detail_info_smallblock_text">
            Located in the heat of krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="detail_info_smallblock_money">
            ${props.detail_data.nine_night_price} (9 nights)
          </p>
          <button className="detail_button">Reserve or book now!</button>
        </div>
      </div>
    </div>
  );
};
//export component
export default DetailInfo;
