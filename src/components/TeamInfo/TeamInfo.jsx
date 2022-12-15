const TeamInfo = () => {
  return (
    <div className="flex-col lg:mt-[100px] mt-[50px] max-sm:gap-3 max-sm:px-5 max-lg:text-center flexible">
      <h5 className="red-text">Team</h5>
      <h2 className="main-heading text-[#16213E]">Team Information</h2>
      <div className=" lg:items-stretch items-center lg:my-[60px] w-full flexible lg:gap-[50px] gap-5 lg:flex-row flex-col">
        <img
          src="/imgs/team.png"
          alt=""
          className="h-[250px] w-[220px] rounded-md lg:h-auto lg:w-auto object-cover"
        />
        <div className="max-w-[608px] w-auto flexible flex-col justify-around lg:items-start items-center">
          <h2 className="main-heading text-[#16213E]">Capt. N. Raghavan</h2>
          <h5 className="red-text text-[12px] leading-[18px]">
            CEO OF RAGHAV BUILDTECH
          </h5>
          <p>
            {/* Capt Raghavan, with 34 years of experience in commercial business,
            including 12 years in the Healthcare industry, is venturing into
            Raghav Buildtech. He has core academic credentials of M.Tech from
            IIT Kharagpur and BTech from NIT Warangal, he also holds a
            professional postgraduate level diploma course in Business
            Management and certifications in Defense Management and Industrial
            Project Management. */}
            Raghav BuildTech is an on-demand home service platform based in
            Bangalore. It provides a platform that allows skilled and
            experienced professionals to connect with users looking for specific
            services. The platform helps customers book reliable & high-quality
            services - electrical, plumbing, tile settlers, home cleaning,
            painting, CCTV installation, home construction, fire alarm sensors
            and much more – delivered by experienced industry leaders. We take
            the time to understand each of our client’s needs to ensure that
            they receive the best possible services for their premises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
