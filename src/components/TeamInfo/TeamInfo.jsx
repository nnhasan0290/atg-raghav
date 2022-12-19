const TeamInfo = () => {
  return (
    <div className="flex-col lg:mt-[100px] mt-[50px] max-sm:px-5 max-lg:text-center flexible">
      <div className="flex flex-col items-center text-center lg:gap-[10px] gap-[8px]">
        <h5 className="red-text">Team</h5>
        <h2 className="main-heading text-[#16213E]">Team Information</h2>
      </div>
      <div className="container lg:items-start items-center lg:my-[60px] lg:mt-[111px] mt-[24px] w-full flexible lg:gap-[78px] gap-5 lg:flex-row flex-col">
        <img
          src="/imgs/team.png"
          alt=""
          className="h-[250px] w-[220px] rounded-md lg:h-auto lg:w-auto object-cover"
        />
        <div className="max-w-[608px] w-auto flexible flex-col lg:gap-[24px] gap-[10px] lg:items-start items-center">
          <div className="flex flex-col lg:gap-[22px] gap-[10px]">
            <h2 className="main-heading text-[#16213E]">Capt. N. Raghavan</h2>
            <h5 className="red-text max-sm:text-[12px] max-sm:leading-[18px]">
              Founder & CEO
            </h5>
          </div>
          <p className="flex flex-col lg:gap-[28px] gap-[15px] lato-font">
            <span>
              Capt N Raghavan, with 34 years of experience in commercial
              business, including 12 years in the Healthcare industry, is
              venturing into Raghav Buildtech. In addition to extensive Pan
              India exposure to Radiology and Pathology, the founder has also
              successfully established himself as FOUNDER & CEO of Magnolia
              Community Health Pvt Ltd.
            </span>
            <span>
              He has generated company growth as a business leader with
              experience in Project and management, Healthcare Services, medical
              device maintenance, P&L management, sales, marketing, and business
              development.
            </span>

            <span>
              Along with core academic credentials of M.Tech from IIT Kharagpur
              and B Tech from NIT Warangal, he also holds a professional
              postgraduate level diploma course in Business Management and
              certifications in Defence Management and Industrial Project
              Management..
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
