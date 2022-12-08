import React from 'react';
import image39 from "./../assets/images/image-39.png"
const Team=()=>{
  return (
    <div className="section">
      <div className="heading-small">team</div>
      <div className='heading-medium' style={{textAlign:'center'}}>Team Information</div>
      <div style={{display:'flex',justifyContent:'center',margin:'50px 0'}}>
        <div style={{height:'300px',marginRight:'80px'}}>
          <img style={{width:'100%',height:'100%'}} src={image39} alt="img-39"/>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'48%'}}>
          <div className='heading-medium'>Capt. N. Raghavan</div>
          <div className="heading-small" style={{textAlign:'start'}}>CEO OF RAGHAV BUILDTECH</div>
          <div className='description'>
          Capt Raghavan, with 34 years of experience in commercial business, 
          including 12 years in the Healthcare industry, is venturing into Raghav 
          Buildtech. He has core academic credentials of M.Tech from IIT Kharagpur 
          and BTech from NIT Warangal, he also holds a professional postgraduate 
          level diploma course in Business Management and certifications in Defense 
          Management and Industrial Project Management.
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team;