//import thu vien
import React from "react";
import './SearchInfo.css'
import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";
const SearchInfo = (props)=>{
  //tao component voi 2 component gom bang pop up ben trai va list ben phai
  return (<div className="SearchInfo">
    <SearchPopup/>
    <SearchList search_data={props.search_data}/>

  </div>)
}
export default SearchInfo;