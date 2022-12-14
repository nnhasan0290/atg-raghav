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
      className="w-[646px]"
    >
      {items.map((slide, i) => (
        <div key={i} className="w-[646px] flexible flex-col items-start gap-5">
          <div className="bg-[#16213E] text-white p-3 w-[80px] h-[80px] flexible">
            <FaQuoteRight className="w-[32px] h-[32px]" />
          </div>
          <p className="text-start">{slide.description}</p>
          <div className="text-[#16213E]">
            <h5 className="text-[22px] leading-[26px] font-[500] text-start">
              {slide.name}
            </h5>
            <p className="text-[14px] leading-[15px]">{slide.city}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Tcarousel;
