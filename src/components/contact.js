import React from "react";
import "./../assets/css/contact.css";
import Collapse from "@mui/material/Collapse";
const Contact=()=>{
  const [expand, setExpand] = React.useState(false);
  return(
    <div id="contact">
      <div className="contact">
        <div className="section" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'50px 0'}}>
          <div className="heading-medium" style={{width:'70%'}}>Are you looking for Construction & Industrial experts ?</div>
          <button className="btn btn-primary"  onClick={() => setExpand(!expand)}>Contact Us &rarr;</button>
        </div>
      </div>
      <Collapse in={expand}>
      <form className="section contact-form">
        <input placeholder="Your Full Name"/>
        <input type="email" placeholder="Your Email Address"/>
        <input placeholder="Your Phone Number"/>
        <input placeholder="Your Address"/>
        <textarea placeholder="Enter Your Message Here..." style={{gridColumn: '1/3',
         gridRow: '3/5'}}/>
        <button type="submit" className="btn btn-primary">Submit Message &rarr;</button>
      </form>
      </Collapse>
      
    </div>
  )
}
export default Contact;