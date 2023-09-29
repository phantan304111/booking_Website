//import thu vien lien quan
import React from "react";
import "./Form.css";
const Form = (props)=>{
//tao thanh phan form/contact voi 2 phan title va input
return(
<div className="Form">
  {/*div title */}
  <div className="Form_content">
  <h2 className="Form__h2">Save time, save money!</h2>
  <div className="Form__text">sign up and we send the best deals to you</div>
  </div>
  {/* div input */}
  <div className="Form_inputlayout">
  <form   className="Form__searchbar">
    <input  
          
            className ="Form_input"
            type="text"
            placeholder="Your Email"
            // value="where are you going"           
          />

  </form> 
      <button className="Form__button">Subcribe </button>
  </div>
   </div>)
};
//export component
export default Form;



