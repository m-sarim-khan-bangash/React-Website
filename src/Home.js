import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowitWorks from "./components/HowitWorks";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowitWorks />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
