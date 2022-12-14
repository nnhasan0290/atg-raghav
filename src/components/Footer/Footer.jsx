import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import NavLinks from "../Header/NavLinks";

const Footer = () => {
  return (
    <div className="gradient my-[100px]">
      <div className="container mx-auto flexible">
        <div className=" basis-1/2 text-white h-[490px] flexible items-start flex-col gap-10">
          <div className="flex gap-2 items-center">
            <img src="/head-logo.png" alt="logo" />
            <div className="">
              <h2 className=" font-[500] text-[34px] leading-[28px]">
                Raghav Buildtech
              </h2>
              <p className="text-[22px] leading-[24px] ">
                Repairs to Rennovation
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#EBECEE] font-[300] text-[14px] leading-[15px]">
              Call Us Today
            </span>
            <h2 className="text-[34px] leading-[38px] font-[600]">
              +91 8754502338
            </h2>
          </div>
          <div className="text-[#001ED3] flex gap-5 pb-10">
            <div className="p-3 bg-white rounded-full cursor-pointer">
              <BsTwitter />
            </div>
            <div className="p-3 bg-white rounded-full cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-white rounded-full cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="p-3 bg-white rounded-full cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="basis-1/2 flexible pl-[100px] flex-col items-start  text-white text-[22px] leading-[26px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-5">
              <h2>Quick Links</h2>
              <NavLinks/>
            </div>
            <div className="flex flex-col gap-5 basis-[238px]">
              <h2>Office Address</h2>
              <p className="text-[18px] text-[#D4D7DD]">
                #173, Ragini, 2A Main Road, Block 7, Nagarabhavi 2nd Stage,
                Bangalore - 560072
              </p>
              <p className="text-18 text-[#D4D7DD]">ragainn@gmail.com</p>
            </div>
          </div>
            <div className="text-[16px] leading-[25.6px] footer-bottom mt-[50px]">
                <span className="mr-10">Site Map</span>
                <span>@2022 copyright raghavbuildtech</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
