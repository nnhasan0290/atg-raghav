import React from "react";
import close from "./../assets/icons/close.svg";
import phone from "./../assets/icons/phone.svg";
const Popup=()=>{
  const [show,setShow]=React.useState(false);
  const handlClosePopup=(e)=>{
    let el=e.target.closest('.popup');
    el.classList.add('hide')
  }
  setTimeout(()=>{
    setShow(true);
  },6000);
  return(
    <div className={`popup ${show?'':'hide'}`}>
    <button className="btn btn-close">
      <img src={close} onClick={handlClosePopup} alt="close"/>
    </button>
    <div className="popup-content">
      <div style={{fontWeight: '600',
         fontSize: '55px',
         lineHeight: '64px',
         }}>Repairs to Rennovation</div>
      <div style={{fontWeight: '400',
         fontSize: '17px',
         lineHeight: '28px',
         color:'#EBECEE'}}>
      Turnkey solution for construction of new projects, repairs to renovations of old 
       buildings, interior designing, exterior beautification, water seepage expertise all 
       under one roof.
      </div>
      <div>
       <div style={{fontWeight: '300',
         fontSize: '14px',
         lineHeight: '15px',
         color:'#EBECEE',marginBottom:'15px'}}>Call Us Today</div>
       <div style={{fontWeight: '600',
         fontSize: '34px',
         lineHeight: '38px'}}>+91 8754502338</div>
      </div>
    </div>
    <img style={{width:'30%'}} src={phone} alt="phone"/>
   
   </div>
  )
}
export default Popup;