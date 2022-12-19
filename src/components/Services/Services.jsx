import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalRefStates } from "../../Context";
import SingleService from "./SingleService";

const Services = () => {
  const { service } = GlobalRefStates();
  const [items, setItems] = useState(3);
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const { data } = await axios.get(
        "http://13.127.163.178:8000/services/All/"
      );
      setServices(data.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <div
      ref={service}
      className="container flex-col gap-0 mx-auto flexible lg:pt-[100px] pt-[50px]"
    >
      <div className="flex flex-col items-center lg:gap-[10px] gap-[8px] ">
        <h4 className="red-text">Our Works</h4>
        <h2 className="main-heading text-[#16213E]">Services</h2>
      </div>
      <div className="flex justify-center lg:gap-[100px] max-lg:px-5 gap-[20px] mt-[2rem] lg:mb-[5rem] mb-[1rem] w-full mx-auto overflow-hidden flex-wrap items-start">
        {services?.slice(0, items).map((service, i) => (
          <SingleService key={i} details={service} />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            items === 3 ? setItems(7) : setItems(3);
          }}
          className="bg-[#D2153D] lg:w-[240px] lg:h-[64px] h-[40px] w-[190px] rounded-[4px] text-white flexible lg:leading-[24px] leading-[140%] lg:text-[20px] text-[12px]"
        >
          Show {items === 3 ? "More" : "Less"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Services;
