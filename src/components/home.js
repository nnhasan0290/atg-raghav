import React from "react";
import "./../assets/css/home.css";

const Home=()=>{
  
  return(
    <div className="home">
      <div
       style={{fontWeight: '600',
       fontSize: '80px',
       lineHeight: '84px',
       color:'white',
       transform: 'translateY(30%)',
       textShadow: '4px 4px #959595',
       width:'78%',
       minHeight: 'calc(100vh - 90px)',
       margin: '0 auto'
      }}
      >One stop solution<br/>for everyone</div>
      
    </div>
  )
}
export default Home;