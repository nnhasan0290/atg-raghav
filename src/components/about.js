import React from "react";
import construction from "./../assets/images/construction.png";
import constructionSpecialist from "./../assets/images/construction-specialist.png";
const About=()=>{
  return(
    <div className="section" id="about">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'100px'}}>
        <div>
          <div className="heading-small">about us</div>
          <div className="heading-medium">With our work<br/> we guarante success</div>
          <div className="title">Capt Raghavan, with 34 years of experience</div>
          <div className="description">
          Capt Raghavan, with 34 years of experience in commercial business, including 
          12 years in the Healthcare industry, is venturing into Raghav Buildtech. In 
          addition to extensive Pan India exposure to Radiology and Pathology, the 
          founder has also successfully established himself as CEO of Magnolia 
          Community Health Pvt Ltd He has generated company growth as a business 
          leader with experience in Project and management, Healthcare Services, medical 
          device maintenance, P&L management, sales, marketing, and business 
          development. Along with core academic credentials of M.Tech from IIT Kharagpur 
          and BTech from NIT Warangal, he also holds a professional postgraduate 
          level diploma course in Business Management and certifications in Defense 
          Management and Industrial Project Management.
          </div>
        </div>
        <div style={{position:'relative'}}>
          <img style={{position:"absolute",height:'60%',right:'10%'}} src={constructionSpecialist} alt="construction1"/>
          <img style={{position:"absolute",height:'55%',bottom:'8%',left:'12%'}} src={construction} alt="construction2"/>
        </div>
      </div>
    </div>
  )
}
export default About;