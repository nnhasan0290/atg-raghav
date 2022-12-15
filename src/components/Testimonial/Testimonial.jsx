import { GlobalRefStates } from "../../Context";
import Tcarousel from "./Slider";
const Testimonial = () => {
  const { testimonial } = GlobalRefStates();
  return (
    <>
      <div
        ref={testimonial}
        className="flex-col flexible lg:pt-[100px] pt-[50px]"
      >
        <h5 className="red-text">Testimonials</h5>
        <h2 className="main-heading text-[#16213E]">Our Clients Say</h2>
        <div className="flexible items-start max-sm:px-5 lg:items-center md:gap-[50px] my-5 justify-start lg:pl-[100px] w-full container">
          <div className="max-w-[40%] ">
            <img
              src="/imgs/colegue.png"
              alt=""
              className="max-w-full object-cover max-sm:h-[188px] max-sm:w-[130px]"
            />
          </div>
          <Tcarousel />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
