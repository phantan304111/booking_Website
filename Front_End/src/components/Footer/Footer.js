import React from "react";
import "./Footer.css"

const Footer =(props)=>{
  
  return(
    <div className="footer_layout">
      {/* tao 1 hang voi moi doi tuong trong data*/}
      {props.footerdata.map((expense)=>{
      return(<div>
        {/* tao 1 phan tu p voi mang noi dung tham chieu tu chuoi trong doi tuong data */}
          {expense.col_values.map(footertext=>{ 
             return(<p> 
              {footertext}
              </p>)
          })}

        </div>)
      })}
     


    </div>
  )
}
//export component
export default Footer;