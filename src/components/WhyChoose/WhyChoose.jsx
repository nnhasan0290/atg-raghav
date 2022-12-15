const WhyChoose = () => {
  return (
    <div className="container max-sm:px-5 lg:justify-between lg:items-stretch items-center mx-auto lg:mt-[100px] mt-[50px] flexible flex-col gap-3 lg:gap-0 lg:flex-row  justify-center">
      <img
        src="/imgs/choose.png"
        alt=""
        className="lg:h-auto lg:w-auto h-[318px] w-[250px] rounded-md"
      />
      <div className="lg:w-[517px] w-auto text-center lg:text-start flexible flex-col justify-around  self-full">
        <h2 className="main-heading">Why choose Raghav Buildtech?</h2>
        <p className="">
          Run by experienced industry leaders with credibility on faster
          turnaround, transparent design and highly reliable. Turnkey solution
          for construction of new projects, repairs to renovations of old
          buildings, interior designing, exterior beautification, water seepage
          expertise all under one roof. Tech enabled, quality and cost
          conscious, OTIF (On Time In Full) construction model, employing the
          least carbon footprint techniques for environment conservation
        </p>
      </div>
    </div>
  );
};

export default WhyChoose;
