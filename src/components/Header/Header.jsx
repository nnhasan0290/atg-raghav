import NavLinks from "./NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import OffCanvasMenu from "./OffCanvasMenu";
import { useState } from "react";

const Header = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  return (
    <>
      {showCanvas && <OffCanvasMenu setShowCanvas={setShowCanvas} />}
      <nav className="sticky top-0 z-20 bg-white ">
        <div className="container justify-between pt-4 pb-2 mx-auto flexible lg:h-[100px] h-[88px]  max-sm:px-5">
          <div className="flexible">
            <img
              src="/head-logo.png"
              alt="logo"
              className="h-[32px] w-[32px] lg:h-[62px] lg:w-[62px]"
            />
            <div>
              <h2 className="nav-heading">Raghav BuildTech</h2>
              <p className="text-black second-small-font">
                Repairs to Rennovation
              </p>
            </div>
          </div>
          <div className="flexible  gap-[50px] second-small-font text-[#00215B] hidden lg:flex">
            <NavLinks />
          </div>
          <span
            className="cursor-pointer lg:hidden text-[#1C1B1F] "
            onClick={() => setShowCanvas(!showCanvas)}
          >
            <RxHamburgerMenu className="h-[28px] w-[28px]" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
