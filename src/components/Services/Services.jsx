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
      className="container flex-col gap-0 mx-auto flexible pt-[100px]"
    >
      <h4 className="red-text">Our Works</h4>
      <h2 className="main-heading text-[#16213E]">Services</h2>
      <div className="flex justify-center gap-[100px] mt-[2rem] mb-[5rem] w-full mx-auto flex-wrap">
        {services?.slice(0, items).map((service, i) => (
          <SingleService key={i} details={service} />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            items === 3 ? setItems(7) : setItems(3);
          }}
          className="bg-[#D2153D] w-[240px] h-[64px] text-white leading-[24px] text-[20px] border-0"
        >
          Show {items === 3 ? "More" : "Less"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Services;
