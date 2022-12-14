const TeamInfo = () => {
  return (
    <div className="flex-col mt-[100px] flexible">
      <h5 className="red-text">Team</h5>
      <h2 className="main-heading text-[#16213E]">Team Information</h2>
      <div className=" items-stretch my-[60px] w-full flexible gap-[50px]">
        <img src="/imgs/team.png" alt="" />
        <div className="w-[608px] flexible flex-col justify-around items-start">
          <h2 className="main-heading text-[#16213E]">Capt. N. Raghavan</h2>
          <h5 className="red-text">CEO OF RAGHAV BUILDTECH</h5>
          <p>
            Capt Raghavan, with 34 years of experience in commercial business,
            including 12 years in the Healthcare industry, is venturing into
            Raghav Buildtech. He has core academic credentials of M.Tech from
            IIT Kharagpur and BTech from NIT Warangal, he also holds a
            professional postgraduate level diploma course in Business
            Management and certifications in Defense Management and Industrial
            Project Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
