import { useEffect, useState } from "react";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const RedModal = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);
  return (
    <>
      {showModal && (
        <div className="fixed hide-scrollbar z-30 top-0 left-0 bottom-0 overflow-auto lg:pt-[170px] pt-[145px] w-full h-full flexible items-start animate-translate">
          <div className="container flexible bg-[#E33F61] text-white justify-between lg:px-[100px] p-[24px] lg:h-auto h-[192px] max-md:mx-5 rounded-2xl relative">
            <button
              className="absolute lg:top-[50px] lg:right-[50px] top-[19px] right-[27.5px]"
              onClick={() => setShowModal(false)}
            >
              <RxCross2 className="lg:h-[32px] lg:w-[32px] h-[16px] w-[16px]" />
            </button>
            <div className="md:basis-[592px] basis-[206px] h-full flex flex-col justify-center lg:gap-[40px] gap-[8px]">
              <h2 className="text-white main-heading">
                Repairs to Rennovation
              </h2>
              <p className="max-md:text-[8px] lato-font max-md:leading-[12px] max-md:text-[#E5E5E5]">
                Turnkey solution for construction of new projects, repairs to
                renovations of old buildings, interior designing, exterior
                beautification, water seepage expertise all under one roof.
              </p>
              <div>
                <span className="text-[#EBECEE] font-[300] lg:text-[14px] text-[10px] leading-[15px]">
                  Call Us Today
                </span>
                <h2 className="lg:text-[34px] text-[16px] lg:leading-[38px] leading-[18px] font-[600]">
                  +91 8754502338
                </h2>
              </div>
            </div>
            <div className="lg:mr-[46px] mr-[9px]">
              <span>
                <MdOutlinePhoneEnabled className="lg:h-[157px] h-[54px] lg:w-[157px] w-[54px]" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RedModal;
