import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Services from "./components/services";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Gallery/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App;
