import NavLinks from "./NavLinks";


const Header = () => {
  
  return (
    <nav className="sticky top-0 z-20 bg-white">
      <div className="container justify-between pt-4 pb-2 mx-auto flexible h-[100px]  ">
        <div className="flexible">
          <img src="/head-logo.png" alt="logo" width={62} height={63} />
          <div>
            <h2 className="nav-heading">Raghav BuildTech</h2>
            <p className="text-black second-small-font">
              Repairs to Rennovation
            </p>
          </div>
        </div>
        <div className="flexible  gap-[50px] second-small-font text-[#00215B]">
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
}

export default Header;
