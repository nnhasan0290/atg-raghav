import { GrClose } from "react-icons/gr";
import NavLinks from "./NavLinks";

const OffCanvasMenu = ({ setShowCanvas }) => {
  return (
    <div className="fixed flex text-center items-center justify-center w-screen border h-screen text-[#00215B] text-[24px] leading-[24px] bg-white z-30 top-0 left-0 box-border overflow-hidden animate-tnsFromRight">
      <span
        className="fixed cursor-pointer top-8 right-5"
        onClick={() => setShowCanvas(false)}
      >
        <GrClose />
      </span>
      <div className="flex flex-col gap-7 ">
        <NavLinks setShowCanvas={setShowCanvas} />
      </div>
    </div>
  );
};

export default OffCanvasMenu;
