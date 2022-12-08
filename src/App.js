import React from "react";
import "./index.css";
import {Header,Home,Popup,About,Contact,Team,Testimonials,Services,Footer} from "./components"
const App=()=> {
  
  return (
    <div >
     <Header/>
     <Home/>
     <Popup />
     <About/>
     <Services/>
     <Team/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
