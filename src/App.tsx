import { Route, Routes } from "react-router-dom";
import {
  Career,
  ContactPage,
  Footer,
  Gallery,
  Header,
  OurCient,
  OurCompanyPage,
  Service,
} from "./paths";
import Home from "./pages/Home";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="relative bg-white">
      <Header headerPosition={"fixed"} toggleMenu={""} activeIndex={0} />
      <Routes>
        {/*  👇🏽👇🏽👇🏽👇🏽 category={""} description={""} headerPosition={""} 
         <--- why this */}
        <Route
          path="/"
          element={<Home category={""} description={""} headerPosition={""} />}
        />
        <Route
          path="/Our_company"
          element={<OurCompanyPage animationImage={""} backgroundImage={""} />}
        />
        <Route path="/What_We_Do" element={<Service />} />
        <Route path="/OurClient" element={<OurCient />} />
        <Route path="/Gallery" element={<Gallery category={""} />} />
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
