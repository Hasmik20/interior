import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import reading from '../util/img/reading.jpg'
import diningRoom from '../util/img/diningRoom.jpg'

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
             <h4> INTERIOR DESIGN </h4>
            <p>Our impressive array of award winning projects is testament to our creative team’s attention to detail and meticulous care. 
          </p>
          <p>
            We lead all  projects from a planning and creative perspective all the way through to completion and handover, supported by our team to assist with detailing, drawings, cost  and project management.
          </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
        </div>
            <img src={diningRoom} alt="kitchen img" />
      </div>
      <div data-aos='fade-up' className="about-hero imgOrder">
         <img src={reading} alt="reading img" className='one' />
          <div className='two'>
             {/* <h4> INTERIOR DESIGN AMSTERDAM</h4> */}
             <p>Having a cozy reading nook is vital for every house: it provides a space to relax and escape from things. It doesn’t require a large space, but it is crucial to have good lighting and a comfortable and appealing seating. The area next to a window is a perfect spot, which will provide not only plenty of natural light but also a beautiful view. Matching footrest will enhance the experience of relaxation and comfort. The bookshelves are a great way to not only showcase the library, but also the owner’s personality and values. Tastefully arranged bookshelf will certainly add to the experience and make the nook the most liked space in the house.</p>
            
        </div>
           
      </div>
      </div>
   </section>
  )
}

export default About