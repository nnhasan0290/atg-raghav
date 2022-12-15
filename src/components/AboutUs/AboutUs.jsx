import { GlobalRefStates } from "../../Context";

const AboutUs = () => {
  const { about } = GlobalRefStates();
  return (
    <div
      ref={about}
      className="container mx-auto flexible lg:flex-row flex-col lg:pt-[100px] pt-[50px] justify-between lg:items-start"
    >
      <div className="max-w-[608px] lg:my-[70px]  max-sm:px-3 flexible flex-col gap-5 lg:items-start items-center lg:text-start text-center">
        <h4 className="red-text">About Us</h4>
        <h2 className="main-heading text-[#16213E]">
          With our work <br /> we guarante success
        </h2>
        <p className="max-xl:pr-[70px] max-lg:pr-0 max-sm:py-3">
          Raghav BuildTech is an on-demand home service platform based in
          Bangalore. It provides a platform that allows skilled and experienced
          professionals to connect with users looking for specific services. The
          platform helps customers book reliable & high-quality services -
          electrical, plumbing, tile settlers, home cleaning, painting, CCTV
          installation, home construction, fire alarm sensors and much more –
          delivered by experienced industry leaders. We take the time to
          understand each of our client’s needs to ensure that they receive the
          best possible services for their premises.
        </p>
      </div>
      <div className="overfllow-visible max-md:pl-[60px]">
        <div className="relative overflow-visible text-center lg:mb-[200px] mb-[100px]">
          <img
            src="/imgs/about.png"
            className="h-[170px] w-[170px] lg:h-auto lg:w-auto rounded-md"
            alt=""
          />
          <div className="absolute top-[55%] left-0 translate-x-[-45%]">
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
