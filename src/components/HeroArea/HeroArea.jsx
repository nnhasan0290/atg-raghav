export default function HeroArea() {
  return (
    <div className="relative">
      <img src="/hero.png" alt="" height={838} />
      <div className="absolute w-full h-full bg-[#D8D8D8]/10 top-0 left-0">
        <div className="container mx-auto mt-[240px]">
          <h2 className="hero-title">
            One stop solution{" "}
            <span className="block font-normal">for everyone</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
