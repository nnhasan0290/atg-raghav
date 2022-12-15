import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const Tcarousel = () => {
  const [items, setItems] = useState([]);
  const getServices = async () => {
    try {
      const { data } = await axios.get(
        "http://13.127.163.178:8000/testimonial/AllTestimonial/"
      );
      setItems(data.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      className="max-w-[646px] w-[58%]"
    >
      {items.map((slide, i) => (
        <div
          key={i}
          className="flex-col items-start gap-3 md:gap-5 max-sm:pt-2 flexible"
        >
          <div className="bg-[#16213E] text-white p-3 md:w-[80px] md:h-[80px] w-[32px] h-[32px] flexible">
            <FaQuoteRight className="w-[32px] h-[32px]" />
          </div>
          <p className="text-start">{slide.description}</p>
          <div className="text-[#16213E]">
            <h5 className="md:text-[22px] md:leading-[26px] text-[14px] leading-[18px] font-[500] text-start">
              {slide.name}
            </h5>
            <p className="md:text-[14px] md:leading-[15px] text-[10px] leading-[12px]">
              {slide.city}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Tcarousel;
