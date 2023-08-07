import { Link, Route, Routes } from "react-router-dom";
import {
  Career,
  ContactPage,
  Footer,
  Gallery,
  Header,
  OurCompanyPage,
  OurPartner,
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
          path="/our_company"
          element={<OurCompanyPage animationImage={""} backgroundImage={""} />}
        />
        <Route path="/what_we_do" element={<Service />} />
        <Route path="/ourpartner" element={<OurPartner />} />
        <Route path="/gallery" element={<Gallery category={""} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />

      <Link to={`https://wa.me/${`+601155066649`}?text=Hi`}>
        <BsWhatsapp className="fixed bottom-10 right-10 text-[40px] md:text-[70px] text-green-500" />
      </Link>
    </div>
    //
    // <Home category={""} description={""} headerPosition={""}/>
  );
}

export default App;
