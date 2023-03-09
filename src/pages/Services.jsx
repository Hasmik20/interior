import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import textile from '../util/img/textile.jpg'
import bedRoom from '../util/img/bedRoom.jpg'

const Services = () => {
     useEffect(() => {
    AOS.init({duration:1500})
     }, [])
  
  return (
    <>
        <section className='service-container'>
        <div className="service-img" >
          <div className="service-info">
              <h2>INTERIOR DESIGNERS </h2>
            <p>Our in-house architectural design team has many years experience creating beautiful bespoke architecture across a wide range of projects and styles, including classical, heritage, contemporary and cutting edge. </p>
          </div>
      </div>
      
      <div className='container'>
       
  
       <div data-aos='fade-up' className="about-hero">
          <div >
             {/* <h4> INTERIOR DESIGN AMSTERDAM</h4> */}
            <p> Our deliver inspirational, personal interiors, created for each individual client. We are proud not to have a “house style”, our co-founder and Design Director, works closely with all our clients, taking great time and care to discover and nurture their aesthetic and lifestyle aspirations for their project.
          </p>
          <p>
          Our Design Director's background as a fashion and textile designer is reflected in her love of form, texture and color, which along with the client’s aesthetic and lifestyle aspirations, form the backbone of the project.
          </p>
        </div>
            <img src={textile} alt="textile img"  />
      </div>
      <div data-aos='fade-up' className="about-hero imgOrder">
         <img src={bedRoom} alt="kitchen img" className='one' />
          <div className='two'>
             {/* <h4> INTERIOR DESIGN AMSTERDAM</h4> */}
            <p>We believe that all design disciplines need to work together; our interior design schemes are developed in close coordination with our in-house interior architecture, architectural design, lighting and landscaping design teams to ensure a harmonious aesthetic that results in exceptionally well executed, balanced and beautifully finished homes.
          </p>
          <p>
              We lead all  projects from a planning and creative perspective all the way through to completion and handover, supported by our team to assist with detailing, drawings, cost  and project management.
          </p>
        </div>
           
      </div>
      </div>
   </section>
    </>
  );
};

export default Services;
