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
        <div className="fixed z-30 w-full h-full flexible animate-translate">
          <div className="container flexible bg-[#E33F61] text-white justify-between p-[100px] rounded-2xl relative">
            <button className="absolute top-10 right-10" onClick={() => setShowModal(false)}>
              <RxCross2 size={30} />
            </button>
            <div className="basis-[592px] flex flex-col gap-5">
              <h2 className="text-white main-heading">
                Repairs to Rennovation
              </h2>
              <p>
                Turnkey solution for construction of new projects, repairs to
                renovations of old buildings, interior designing, exterior
                beautification, water seepage expertise all under one roof.
              </p>
              <div>
                <span className="text-[#EBECEE] font-[300] text-[14px] leading-[15px]">
                  Call Us Today
                </span>
                <h2 className="text-[34px] leading-[38px] font-[600]">
                  +91 8754502338
                </h2>
              </div>
            </div>
            <div className="mr-[50px]">
              <span>
                <MdOutlinePhoneEnabled className="h-[157px] w-[157px]" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RedModal;
