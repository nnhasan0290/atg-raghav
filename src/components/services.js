import React from "react";
import image7 from "./../assets/images/image-7.png";
import image2 from "./../assets/images/image-2.png";
import image37 from "./../assets/images/image-37.png";
import image5 from "./../assets/images/image-5.png";
import image3 from "./../assets/images/image-3.png";
import image6 from "./../assets/images/image-6.png";
import image19 from "./../assets/images/image-19.png";
import rectangle4 from "./../assets/images/Rectangle-4.png";
import Collapse from "@mui/material/Collapse";
const Services=()=>{
  const [expand, setExpand] = React.useState(false);
  return(
    <div className="section" id="services">
      <div className="heading-small">our works</div>
      <div className="heading-medium" style={{textAlign:'center'}}>Services</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridGap:'60px',justifyItems:'center'}}>
        <div className="card">
          <img className="card-image" src={image7} alt="image7"/>
         <div className="card-content">
           <div className="title">Electrical</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        <div className="card">
          <img className="card-image" src={image2} alt="image7"/>
         <div className="card-content">
           <div className="title">Plumbing</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        <div className="card">
          <img className="card-image" src={image37} alt="image7"/>
         <div className="card-content">
           <div className="title">Title Settlers</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        
      </div>
      <Collapse in={expand} style={{marginTop:'60px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridGap:'60px',justifyItems:'center',alignContent:'center'}}>
        <div className="card">
          <img className="card-image" src={image5} alt="image7"/>
         <div className="card-content">
           <div className="title">Painting</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        <div className="card">
          <img className="card-image" src={image3} alt="image7"/>
         <div className="card-content">
           <div className="title">CCTV installation</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        <div className="card">
          <img className="card-image" src={image6} alt="image7"/>
         <div className="card-content">
           <div className="title">Construction of house</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        <div></div>
        <div className="card">
          <img className="card-image" src={image19} alt="image7"/>
         <div className="card-content">
           <div className="title">Firm alarm sensors</div>
           <div className="description">
           There are many variations of passages of lorem
           Ipsum available.
           </div>
         </div>
        </div>
        </div>
      </Collapse>
      <button className="btn btn-primary" style={{display:'block',margin:'45px auto'}} onClick={() => setExpand(!expand)}>Show {expand?'less':'more'}</button>
      <div style={{display:'grid',gridTemplateColumns:'0.5fr 1fr',gridGap:'100px'}}>
        <div>
          <img style={{width:'100%'}} src={rectangle4} alt="rect-4"/>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',padding :'20px 30px'}}>
          <div className="heading-medium">Why choose Raghav Buildtech?</div>
          <div className="description">
          Run by experienced industry leaders with credibility on faster turnaround,
          transparent design and highly reliable. Turnkey solution for construction 
          of new projects, repairs to renovations of old buildings, interior designing, 
          exterior beautification, water seepage expertise all under one roof. Tech 
          enabled, quality and cost conscious, OTIF (On Time In Full) construction 
          model, employing the least carbon footprint techniques for environment 
          conservation
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;