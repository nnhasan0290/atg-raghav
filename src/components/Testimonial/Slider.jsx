
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slideData = [
  {
    description: "I've just lately learned about Raghav BuildTech's painting and cleaning services. The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget",
    name: "Manav Singh",
  },
  {
    description: "I'm thrilled with the comprehensive service I received for my home being painted. We hope to work with Raghav BuildTech again in the near future!",
    name: "Ashish Jhah",
  },
  {
    description: "These guys saved me a lot of time because I didn't have to worry about scheduling the carpenter, plumber, and electrician individually. They accepted the proposal, and the pricing they gave was incredibly economical",
    name: "Rishab Goyal",
  }
]

const Tcarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      className="max-w-[646px] w-[58%]"
    >
      {slideData.map((slide, i) => (
        <div
          key={i}
          className="flex-col items-start max-sm:pt-2 flexible lato-font"
        >
          <div className="bg-[#16213E] text-white p-3 md:w-[80px] md:h-[80px] mb-[30px] w-[32px] h-[32px] flexible">
            <FaQuoteRight className="w-[32px] h-[32px]" />
          </div>
          <p className="text-start">{slide.description}</p>
          <div className="text-[#16213E]">
            <h5 className="md:text-[20px] md:leading-[26px] text-[14px] leading-[18px] font-[600] text-start">
              {slide.name}
            </h5>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Tcarousel;
