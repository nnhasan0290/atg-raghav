import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import NavLinks from "../Header/NavLinks";

const Footer = () => {
  return (
    <div className="gradient lg:my-[100px] my-[50px]">
      <div className="gap-0 lg:container lg:mx-auto lg:flexible">
        <div className="lg:basis-1/2 bg-[#d2153d] lg:bg-none  text-white lg:h-[490px] py-10 flexible items-center lg:items-start flex-col gap-5 lg:gap-10 ">
          <div className="container flex items-center justify-center gap-2 mx-auto lg:justify-start">
            <img
              className="h-[32px] w-[32px] lg:h-auto lg:w-auto"
              src="/head-logo.png"
              alt="logo"
            />
            <div className="">
              <h2 className=" font-[500] lg:text-[34px] text-[14px] lg:leading-[28px] leading-[15px]">
                Raghav Buildtech
              </h2>
              <p className="lg:text-[22px] lg:leading-[24px] text-[10px] leading-[12px]">
                Repairs to Rennovation
              </p>
            </div>
          </div>
          <div className="container mx-auto text-center lg:text-start">
            <span className="text-[#EBECEE] font-[300] text-[14px] leading-[15px]">
              Call Us Today
            </span>
            <h2 className="lg:text-[34px] lg:leading-[38px] text-[22px] leading-[24px] font-[600]">
              +91 8754502338
            </h2>
          </div>
          <div className="text-[#001ED3] flex gap-5 lg:pb-10 container mx-auto justify-center lg:justify-start">
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
        <div className="lg:basis-1/2 py-5 bg-[#00215b] flex-wrap flex-col lg:flex-row flexible lg:pl-[100px] items-start  text-white text-[22px] leading-[26px]">
          <div className="container mx-auto lg:flex lg:justify-between">
            <div className="flex flex-col lg:gap-5 gap-3 items-center lg:items-start max-lg:text-[14px] max-lg:leading-[16px]">
              <h2 className="max-lg:text-[18px] max-lg:leading-[20px]">
                Quick Links
              </h2>
              <NavLinks />
            </div>
            <div className="flex container mx-auto flex-col lg:gap-5 gap-2 max-lg:mt-[40px] basis-[238px] max-lg:text-[14px] max-lg:leading-[20px] items-center lg:items-start">
              <h2 className="max-lg:text-[18px] max-lg:leading-[20px]">
                Office Address
              </h2>
              <p className="lg:text-[18px] text-[14px] text-center lg:text-start text-[#D4D7DD] max-sm:px-5">
                #173, Ragini, 2A Main Road, Block 7, Nagarabhavi 2nd Stage,
                Bangalore - 560072
              </p>
              <p className="text-18 text-[#D4D7DD]">ragainn@gmail.com</p>
            </div>
          </div>
          <div className="lg:text-[16px] text-[12px] text-center lg:text-start container mx-auto leading-[14px] lg:leading-[25.6px] footer-bottom mt-[20px] lg:mt-[50px]">
            <span className="lg:mr-10 block lg:inline-block max-lg:pb-[10px]">
              Site Map
            </span>
            <span>@2022 copyright raghavbuildtech</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
