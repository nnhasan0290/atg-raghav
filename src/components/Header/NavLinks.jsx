import { GlobalRefStates } from "../../Context";

const NavLinks = () => {
  const { service, about, contact, testimonial } = GlobalRefStates();
  return (
    <>
      <div
        onClick={() => {
          service.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer"
      >
        Services
      </div>
      <div
        onClick={() => {
          about.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer"
      >
        About Us
      </div>
      <div
        onClick={() => {
          testimonial.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer"
      >
        Testimonials
      </div>
      <div
        onClick={() => {
          contact.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer"
      >
        Contact
      </div>
    </>
  );
};

export default NavLinks;
