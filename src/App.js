import Navbar from "./components/Navbar/Navbar"
import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/Menu/Menu"
import SpecialEvent from "./components/SpecialEvent/SpecialEvent"
import Service from "./components/Service/Service"
import Award from "./components/Awards/Awards"
import Gallery from "./components/Gallery/Gallery"
import Contact from "./components/Contact/Contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar menu={Menu}/>
      <AboutUs />
      <Menu />
      <SpecialEvent />
      <Service />
      <Award />
      <Gallery />
      <Contact />
    </div>

  );
}

export default App;
