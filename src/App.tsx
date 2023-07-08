import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  Footer,
  Gallery,
  Header,

  JointVentures,
  Service,
} from "./paths";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative">
      <Header headerPosition={"absolute"} />
      <Routes>
        {/*  👇🏽👇🏽👇🏽👇🏽 category={""} description={""} headerPosition={""}  <--- why this */}
        <Route
          path="/"
          element={<Home category={""} description={""} headerPosition={""} />}
        />
        <Route
          path="/about"
          element={<AboutPage animationImage={""} backgroundImage={""} />}
        />
        <Route path="/service" element={<Service />} />
        <Route path="/JointVentures" element={<JointVentures />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
    //
    // <Home category={""} description={""} headerPosition={""}/>
  );
}

export default App;
