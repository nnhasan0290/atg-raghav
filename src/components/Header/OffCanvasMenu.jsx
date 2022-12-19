import { GrClose } from "react-icons/gr";
import NavLinks from "./NavLinks";

const OffCanvasMenu = ({ setShowCanvas }) => {
  return (
    <div className="fixed flex text-center items-center justify-center w-[85vw] border h-screen text-[#00215B] text-[24px] leading-[24px] bg-white z-30 top-0 right-0 box-border overflow-hidden animate-tnsFromRight">
      <span
        className="fixed right-5 top-8 cursor-pointer"
        onClick={() => setShowCanvas(false)}
      >
        <GrClose />
      </span>
      <div className="flex flex-col gap-7">
        <NavLinks setShowCanvas={setShowCanvas} />
      </div>
    </div>
  );
};

export default OffCanvasMenu;
