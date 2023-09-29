//import thu vien
import React from "react";
import "./SearchItem.css"
const SearchItem =(props)=>{
  // console.log(props);
//tham chieu cac bien vao component, tao layout flex voi 3 phan - anh ,  info va rating
return(
  <div className="SearchItem">
    {/* anh cua khach san */}
  <img src ={props.info.image_url} className="Search_item_img"/>
  {/* Phan div info */}
  <div className="SearchItem_layout">
  <div className="SearchItem_name">{props.info.name}</div>
  <div className="SearchItem_distance">{props.info.distance} from center</div>
  <div className="SearchItem_tag">{props.info.tag}</div>
  <div className="SearchItem_description">{props.info.description}</div>
  <div className="SearchItem_type">{props.info.type}</div>
  
  {props.info.free_cancel?(<div><div className="SearchItem_cancel">Free cancellation</div><div className="SearchItem_canceltext">You can cancel later, so lock in this great prize today!</div></div>):console.log()}
  <div className="SearchItem_free_cancel">{props.info.free_cancel}</div>
  </div>  
 {/* Phan div rating */}
  <div className="SearchItem_layout2">
    <div className="SearchItem_rate_text">{props.info.rate_text}</div> 
  <div className="SearchItem_rate">{props.info.rate}</div>
  <div className="SearchItem_price">${props.info.price}</div>
  <div className="SearchItem_Tax">include taxes and fees</div>
  <button className="SearchItem_Button">See avaiablity</button>
  </div> 
  </div>
)
}
//export component
export default SearchItem;