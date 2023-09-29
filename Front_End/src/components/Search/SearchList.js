//imort thu vien
import React from "react";
import './SearchList.css'
import SearchItem from "./SearchItem";
const SearchList = (props)=>{
  //tao 1 component item voi moi phan tu trong list
  return( <div className="SearchList">
     {props.search_data.map(data=>{
      return(<SearchItem info ={data}/>)
     })} 
    
  </div>)
}
//export component
export default SearchList;