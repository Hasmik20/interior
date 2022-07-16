import { Routes, Route, } from "react-router-dom";

import './styles/styles.scss'
import Nav from './components/nav/Nav';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Footer from "./components/footer/Footer";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Projects from './pages/Projects';
import Error from "./pages/Error";

function App() {
  return (
    <div >
      <Nav />
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={ <Projects />}/>
        <Route path="/services" element={<Services />} /> 
        <Route path='/shop' element={<Shop />} />
        <Route path="/contact" element={<Contacts />} /> 
         <Route path="*" element={ <Error />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
