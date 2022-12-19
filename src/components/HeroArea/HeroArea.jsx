export default function HeroArea() {
  return (
    <div className="relative">
      <img
        src="/imgs/office.png"
        alt=""
        className="lg:h-[719px] h-[304px] object-cover w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full hero-graident">
        <div className="container mx-auto lg:mt-[242px] mt-[40px] max-sm:px-8 text-center flex items-center flex-col h-full lg:gap-[16px] gap-[24px]">
          <h2 className="hero-title">Turn key solution for everyone</h2>
          <p className="text-white text-[14px] leading-[20px] lg:text-[22px] lg:leading-[24px] font-[500] lg:w-[818px]">
            We are professionals who are experienced and deliver project of
            exceptional quality while staying on schedule and under budget.
          </p>
        </div>
      </div>
    </div>
  );
}
