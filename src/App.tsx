import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useScrollState } from "./hooks/useScrollState";
import { useScrollReveal } from "./hooks/useScrollReveal";

// Keeps the body class in sync with the page, so your CSS still applies
function BodyClass() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.classList.remove("page-home", "page-dark");
    document.body.classList.add(pathname === "/" ? "page-home" : "page-dark");
  }, [pathname]);
  return null;
}

function Layout() {
  const { scrolled, progress } = useScrollState();
  useScrollReveal();

  return (
    <>
      <BodyClass />
      <CustomCursor />
      <ScrollProgress progress={progress} />
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout />
    </BrowserRouter>
  );
}