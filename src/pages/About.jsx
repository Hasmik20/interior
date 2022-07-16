import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import kitchen from '../util/img/kitchen.jpg'

const About = () => {
    useEffect(() => {
    AOS.init({duration:1500})
  },[])
  return (
    <section className='about-container'>
        <div className="about-img" >
          <div className="about-info">
              <h2>About us </h2>
           
            <p>Simply Home offers a comprehensive design service creating luxury residential homes for discerning clients. We truly believe that good quality design is life enhancing and deliver it in every project we undertake. Each project is seamlessly executed and beautifully finished. </p>
          </div>
      </div>
      
      <div className='container'>
       
  
       <div data-aos='fade-up' className="about-hero">
          <div >
             <h4> INTERIOR DESIGN AMSTERDAM</h4>
            <p>Our impressive array of award winning projects is testament to our creative team’s attention to detail and meticulous care. 
          </p>
          <p>
            We lead all  projects from a planning and creative perspective all the way through to completion and handover, supported by our team to assist with detailing, drawings, cost  and project management.
          </p>
        </div>
            <img src={kitchen} alt="kitchen img" />
      </div>
      <div data-aos='fade-up' className="about-hero imgOrder">
         <img src={kitchen} alt="kitchen img" className='one' />
          <div className='two'>
             <h4> INTERIOR DESIGN AMSTERDAM</h4>
            <p>Our impressive array of award winning projects is testament to our creative team’s attention to detail and meticulous care. 
          </p>
          <p>
              We lead all  projects from a planning and creative perspective all the way through to completion and handover, supported by our team to assist with detailing, drawings, cost  and project management.
          </p>
        </div>
           
      </div>
      </div>
   </section>
  )
}

export default About