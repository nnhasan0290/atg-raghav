const TeamInfo = () => {
  return (
    <div className="flex-col lg:mt-[100px] mt-[50px] max-sm:gap-3 max-sm:px-5 max-lg:text-center flexible">
      <h5 className="red-text">Team</h5>
      <h2 className="main-heading text-[#16213E]">Team Information</h2>
      <div className="container lg:items-start items-center lg:my-[60px] lg:mt-[111px] w-full flexible lg:gap-[78px] gap-5 lg:flex-row flex-col">
        <img
          src="/imgs/team.png"
          alt=""
          className="h-[250px] w-[220px] rounded-md lg:h-auto lg:w-auto object-cover"
        />
        <div className="max-w-[608px] w-auto flexible flex-col lg:gap-[22px] gap-[10px] lg:items-start items-center">
          <h2 className="main-heading text-[#16213E]">Capt. N. Raghavan</h2>
          <h5 className="red-text max-sm:text-[12px] max-sm:leading-[18px]">
            Founder & CEO OF RAGHAV BUILDTECH
          </h5>
          <p className="lato-font">
            Capt Raghavan, with 34 years of experience in commercial business,
            including 12 years in the Healthcare industry, is venturing into
            Raghav Buildtech. In addition to extensive Pan India exposure to
            Radiology and Pathology, the founder has also successfully
            established himself as CEO of Magnolia Community Health Pvt Ltd He
            has generated company growth as a business leader with experience in
            Project and management, Healthcare Services, medical device
            maintenance, P&L management, sales, marketing, and business
            development Along with core academic credentials of M.Tech from IIT
            Kharagpur and BTech from NIT Warangal, he also holds a professional
            postgraduate level diploma course in Business Management and
            certifications in Defense Management and Industrial Project
            Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
