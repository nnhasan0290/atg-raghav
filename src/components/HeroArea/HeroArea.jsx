export default function HeroArea() {
  return (
    <div className="relative">
      <img
        src="/hero.png"
        alt=""
        className="lg:h-[838px] h-[304px] object-cover w-full"
      />
      <div className="absolute w-full h-full bg-[#D8D8D8]/10 top-0 left-0 flex items-center">
        <div className="container mx-auto lg:pb-[240px] pb-[100px]  max-sm:px-5">
          <h2 className="hero-title">
            One stop solution{" "}
            <span className="block font-normal">for everyone</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
