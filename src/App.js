import "./assets/css/App.css";
import Nav from "./comp/Nav";
import Banner from "./Screens/Banner";
import About from "./Screens/About";
import Service from "./Screens/Services";
import Portfolio from "./Screens/Portfolio";
import Contact from "./Screens/Contact";
import Footer from "./comp/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
