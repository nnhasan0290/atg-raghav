import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GlobalRefStates } from "../../Context";
import Form from "./Form";

const Contact = () => {
  const { contact } = GlobalRefStates();
  const [showForm, setShowForm] = useState(false);
  return (
    <div ref={contact} className="lg:pt-[100px] pt-[40px]">
      <div className="flexible contact-form">
        <div className="container mx-auto flexible max-sm:px-5 lg:gap-[205px]">
          <h2 className="main-heading max-lg:text-[16px] max-lg:leading-[24px] text-[#00215B]">
          Are you looking for General Contractors & Industrial Experts?
          </h2>
          <div>
            <button
              className="bg-[#D2153D] lg:w-[240px] rounded-[4px] lg:h-[64px] h-[28px] w-[80px] text-white flexible lg:leading-[24px] leading-[140%] lg:text-[20px] text-[12px]"
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Contact Us{" "}
              <span className="hidden lg:block">
                <FaArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showForm && <Form />}
    </div>
  );
};

export default Contact;
