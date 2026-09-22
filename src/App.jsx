import Navbar from "./components/Navbar";
import Hero from "./components/Header";
import BiodataSection from "./components/Biodata";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

import "./Biodata.css";

const App = () => {
  return (
    <div className="page">
      <Navbar />

      <div className="shell">
        <Hero />
      </div>

      <div className="shell">
        <BiodataSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;