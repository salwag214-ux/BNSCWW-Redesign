

import "./App.css";

import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Ticker from "./components/ticker/ticker.jsx";
import About from "./components/about/about.jsx";
import Services from "./components/services/services.jsx";
import Footer from "./components/footer/footer.jsx";

import companyImage from "./assets/image/image7.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />

      <main className="company-sections">
        <div
          className="company-sections-background"
          style={{
            backgroundImage: `url(${companyImage})`,
          }}
        />

        <div className="company-sections-overlay" />

        <About />
        <Services />
      </main>

      <Footer />
    </>
  );
}

export default App;
