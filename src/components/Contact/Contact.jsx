import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GlobalRefStates } from "../../Context";
import Form from "./Form";

const Contact = () => {
  const { contact } = GlobalRefStates();
  const [showForm, setShowForm] = useState(false);
  return (
    <div ref={contact} className="pt-[100px] ">
      <div  className="flexible contact-form">
        <div className="container mx-auto flexible">
          <h2 className="main-heading">
            Are you looking for Construction & Industrial experts ?
          </h2>
          <div>
            <button
              className="bg-[#D2153D] w-[240px] h-[64px] text-white flexible leading-[24px] text-[20px]"
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Contact Us{" "}
              <span>
                <FaArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showForm &&(
           <Form />
      )}
    </div>
  );
};

export default Contact;
