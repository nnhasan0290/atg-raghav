import { GlobalRefStates } from "../../Context";

const AboutUs = () => {
  const { about } = GlobalRefStates();
  return (
    <div
      ref={about}
      className="container mx-auto flexible lg:flex-row flex-col lg:pt-[100px] pt-[50px] gap-0 justify-between lg:items-start"
    >
      <div className="lg:basis-[508px] lg:mr-[56px] about-us-content lg:my-[70px] flexible flex-col gap-5 lg:items-start items-center lg:text-start text-center">
        <h4 className="red-text">About Us</h4>
        <h2 className="main-heading text-[#16213E]">
          With our work <br /> we guarante success
        </h2>
        <p className=" max-sm:py-3 max-lg:px-5 lato-font">
          Raghav BuildTech is an on-demand home service platform based in
          Bangalore. It provides a platform that allows skilled and experienced
          professionals to connect with users looking for specific services. The
          platform helps customers book reliable & high-quality services -
          electrical, plumbing, tile settlers, home cleaning, painting, CCTV
          installation, home construction, fire alarm sensors and much more –
          delivered by experienced industry leaders. We take the time to
          understand each of our client’s needs to ensure that they receive the
          best possible services for their premises. 2:53 Raghav Capt Raghavan,
          with 34 years of experience in commercial business, including 12 years
          in the Healthcare industry, is venturing into Raghav Buildtech. In
          addition to extensive Pan India exposure to Radiology and Pathology,
          the founder has also successfully established himself as CEO of
          Magnolia Community Health Pvt Ltd He has generated company growth as a
          business leader with experience in Project and management, Healthcare
          Services, medical device maintenance, P&L management, sales,
          marketing, and business development Along with core academic
          credentials of M.Tech from IIT Kharagpur and BTech from NIT Warangal,
          he also holds a professional postgraduate level diploma course in
          Business Management and certifications in Defense Management and
          Industrial Project Management.
        </p>
      </div>
      <div className="overfllow-visible max-md:pl-[60px] mr-[15px] lg:basis-[480px] max-lg: mt-[10px]">
        <div className="relative overflow-visible text-center lg:mb-[200px] mb-[100px] w-full  flex justify-end">
          <img
            src="/imgs/about.png"
            className="h-[170px] w-[170px] lg:h-[357px] lg:w-[350px] rounded-md"
            alt=""
          />
          <div className="absolute top-[55%] left-0 max-lg:translate-x-[-50%]">
            <img
              src="/imgs/aboutus.png"
              alt=""
              className="h-[172px] w-[130px] lg:h-auto lg:w-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
