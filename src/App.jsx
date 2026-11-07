import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FeaturedDesigns from "./components/FeaturedDesigns";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <FeaturedDesigns />
      <Gallery />
      <About />
      </main>
    </>
  );
}

export default App;
