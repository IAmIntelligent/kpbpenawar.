import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  Career,
  ContactPage,
  Footer,
  Header,
  OurCient,
  Service,
} from "./paths";
import Home from "./pages/Home";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="relative ">
      <Header headerPosition={"fixed"} toggleMenu={""} activeIndex={0} />
      <Routes>
        {/*  👇🏽👇🏽👇🏽👇🏽 category={""} description={""} headerPosition={""} 
         <--- why this */}
        <Route
          path="/"
          element={<Home category={""} description={""} headerPosition={""} />}
        />
        <Route
          path="/about"
          element={<AboutPage animationImage={""} backgroundImage={""} />}
        />
        <Route path="/What_We_Do" element={<Service />} />
        <Route path="/OurClient" element={<OurCient />} />
        {/* <Route path="/Gallery" element={<Gallery />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />

      <BsWhatsapp className="fixed bottom-10 right-10 text-[40px] md:text-[70px] text-green-500" />
    </div>
    //
    // <Home category={""} description={""} headerPosition={""}/>
  );
}

export default App;
