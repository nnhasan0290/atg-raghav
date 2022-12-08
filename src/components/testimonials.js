import React from "react";
import imgTestimonial from "./../assets/images/colleagues.png";
import dot from "./../assets/icons/dot.svg";
import quote from "./../assets/icons/quote-right.svg";
import "./../assets/css/carousel.css";
const Testimonials=()=>{
  const [activeIndex,setActiveIndex]=React.useState(0);
  const testimonials=[
    {id:1,
     name:'Katy Grey',
     content:'Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique',
     position:'CEO Grey Industries',
     },
     {id:2,
      name:'Katy Grey',
      content:'Suspendisse torto enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique',
      position:'CEO Grey Industries',},
      {id:3,
        name:'Katy Grey',
        content:'Suspendisse torto enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique',
        position:'CEO Grey Industries',}]
  return(
    <div className="section" id="testimonials">
      <div className="heading-small">testimonials</div>
      <div className='heading-medium' style={{textAlign:'center'}}>Our Clients Say</div>
      <div style={{display:'flex',height:'400px'}}>
        <img style={{width:'30%',marginRight:'50px',height:'100%'}} src={imgTestimonial} alt=""/>
        <div className="carousel">
          <div className="carousel-inner" style={{transform:`translateX(-${activeIndex*100}%)`}}>
            {testimonials.map(t=><div className="carousel-item" key={`item-${t.id}`} >
              <div className="testimonial">
              <div className="quote"><img src={quote} alt=""/></div>
              <div className="feedback">{t.content}</div>
              <div className="testimonial-user">{t.name}</div>
              <div className="testimonial-user-position">{t.position}</div>
              </div>
            </div>)}
          </div>
          <div className="indicators">
            {testimonials.map((t,index)=><img className={`indicator ${activeIndex===index?'active':''}`} onClick={()=>setActiveIndex(index)} src={dot} alt=""/>)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials;