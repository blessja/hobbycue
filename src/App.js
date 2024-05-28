import "./customStyles.css"
import Nav from './components/Nav';
import Home from "./components/Home";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import End from "./components/End";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav/>
        <Home/>
        <Feature/>
      <Testimonial/>
       <End/>
      <Footer/>


    </div>
  );
}

export default App;
