const WhyChoose = () => {
  return (
    <div className="container max-sm:px-5 lg:justify-center lg:gap-[159px] lg:items-stretch items-center mx-auto lg:mt-[100px] mt-[50px] flexible flex-col gap-3 lg:flex-row  justify-center">
      <img
        src="/imgs/wchoose.png"
        alt=""
        className="lg:h-auto lg:w-auto h-[318px] w-[250px] rounded-md"
      />
      <div className="lg:w-[640px] w-auto text-center lg:text-start flexible flex-col justify-center  self-full lg:gap-[80px] gap-[16px]">
        <h2 className="main-heading">Why choose Raghav Buildtech?</h2>
        <div className=" text-black text-start lato-font lg:text-[17px] lg:leading-[30px]">
          <li className="ml-[1rem] indent-[-1rem]">
            Run by experienced industry leaders with credibility on faster
            turnaround.
          </li>
          <li className="ml-[1rem] indent-[-1rem]">
            Transparent design and highly reliable.
          </li>
          <li className="ml-[1rem] indent-[-1rem]">
            Repairs to renovations of old buildings, interior designing.
          </li>
          <li className="ml-[1rem] indent-[-1rem]">
            Exterior beautification, water seepage expertise all under one roof.{" "}
          </li>
          <li className="ml-[1rem] indent-[-1rem]">
            Tech enabled, quality and cost conscious.
          </li>
          <li className="ml-[1rem] indent-[-1rem]">
            OTIF (On Time In Full) construction model, employing the least
            carbon footprint techniques for environment.
          </li>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
