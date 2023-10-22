import "./App.css";

import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/Navbarone/navs";

import Navbar from "./components/new/Nav-one";
import Home from "./pages/homepage";
import Aboutus from "./pages/aboutus";
import Contact from "./pages/contact";
import HomeInterior from "./pages/service-dropdown-pages/home-interiories";
import Commercial from "./pages/service-dropdown-pages/commercial-interior";
import Corporate from "./pages/service-dropdown-pages/corporate-interior";
import Gallary from "./pages/gallary";
import Blog from "./pages/blog";
// import New from "./components/nav-bar/new";\

import Footer from "./components/Fotter/fotter";
function App() {
  return (
    <>
      <Navbar />
      {/* <New /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Home-interiories" element={<HomeInterior />} />
        <Route path="/Commercial-interior" element={<Commercial />} />
        <Route path="/Corporate-interior" element={<Corporate />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <Footer />
      {/* <NavBar/> */}
    </>
  );
}

export default App;
