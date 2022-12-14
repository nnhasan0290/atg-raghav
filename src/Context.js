import { createContext, useContext, useRef } from "react";

const GlobalRef = createContext();

const RefContext = ({ children }) => {
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const testomonialRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <GlobalRef.Provider
      value={{
        service: serviceRef,
        about: aboutRef,
        testimonial: testomonialRef,
        contact: contactRef,
      }}
    >
      {children}
    </GlobalRef.Provider>
  );
};

export default RefContext;

export const GlobalRefStates = () => useContext(GlobalRef);
