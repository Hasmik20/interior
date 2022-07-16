import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


import kitchen from '../util/img/kitchen.jpg'
// import dining from '../../img/dining.jpg'
const Home = () => {
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
   AOS.init({duration:1500})
  }, [])
  
  const text = 'Simply Home deliver inspirational, personal interiors, created for each individual client. We are proud not to have a “house style”, our Co-founder and Design Director,  works closely with each of our clients, taking great time and care to discover and nurture their aesthetic and lifestyle aspirations for their project. We deliver inspirational, personal interiors, created for each individual client.'
  return (
    <section className='home-container'>
        {/* <div className="home-img" > */}
          <div className="home-info">
            <h2>Design Studio </h2>
            <button className="home-btn">
              <Link to="contact" > Book an initial consultation </Link >
            </button>
          </div>
        {/* </div> */}


      
        <div className='container'>
          <div data-aos='fade-up' className="home-hero">
            <img src={kitchen} alt="kitchen img" />
            <div >
              <h4>INTERIOR DESIGN LONDON</h4>
              <p>{readMore ? text : `${text.slice(0,340)}...`}
              <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}
            </button>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};
export default Home;
