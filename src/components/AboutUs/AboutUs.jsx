import { GlobalRefStates } from "../../Context";

const AboutUs = () => {
  const {about} = GlobalRefStates()
  return (
    <div ref={about} className="container mx-auto flexible pt-[100px] justify-between items-start">
      <div className="max-w-[608px] my-[70px] flexible flex-col gap-5 items-start">
        <h4 className="red-text">About Us</h4>
        <h2 className="main-heading text-[#16213E]">
          With our work <br/> we guarante success
        </h2>
        <p className="text-[#00215B]">
          Capt Raghavan, with 34 years of experience
        </p>
        <p>
          Capt Raghavan, with 34 years of experience in commercial business,
          including 12 years in the Healthcare industry, is venturing into
          Raghav Buildtech. In addition to extensive Pan India exposure to
          Radiology and Pathology, the founder has also successfully established
          himself as CEO of Magnolia Community Health Pvt Ltd He has generated
          company growth as a business leader with experience in Project and
          management, Healthcare Services, medical device maintenance, P&L
          management, sales, marketing, and business development. Along with
          core academic credentials of M.Tech from IIT Kharagpur and BTech from
          NIT Warangal, he also holds a professional postgraduate level diploma
          course in Business Management and certifications in Defense Management
          and Industrial Project Management.
        </p>
      </div>
      <div className="overfllow-visible">
        <div className="overflow-visible relative">
            <img src="/imgs/about.png" alt="" />
            <div className="absolute top-[55%] left-0 translate-x-[-45%]">
                <img src="/imgs/aboutus.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
