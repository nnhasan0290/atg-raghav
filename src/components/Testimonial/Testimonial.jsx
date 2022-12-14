
import { GlobalRefStates } from "../../Context";
import Tcarousel from "./Slider";
const Testimonial = () => {
  const {testimonial} = GlobalRefStates();
  return (
    <>
    <div ref={testimonial} className="flex-col flexible pt-[100px]">
      <h5 className="red-text">Testimonials</h5>
      <h2 className="main-heading text-[#16213E]">Our Clients Say</h2>
      <div className="flexible gap-[50px] my-5 justify-start pl-[100px] w-full container">
        <img src="/imgs/colegue.png" alt="" />
        <Tcarousel/>
      </div>
    </div>
     
      </>
  );
};

export default Testimonial;
