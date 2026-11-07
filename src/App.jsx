import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FeaturedDesigns from "./components/FeaturedDesigns";
import About from "./components/About";
import ArtisticStyle from "./components/ArtisticStyle";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <FeaturedDesigns />
      <Gallery />
      <About />
      <ArtisticStyle />
      <Instagram />
      <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
