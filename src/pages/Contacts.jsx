import {useState} from 'react'

import ContactInfo from './ContactInfo'



const Contacts = () => {
  return (
    <section className='contact-container'>
      <div className='container'>

        <ContactInfo />
      <div className="form-container">
        <h4> Book a complimentary phone consultation with us to discuss your next project.
        </h4>
          <form >
            <div className='inputs-container'>
          <div className='gridContainer'>
                
          <div className='form-control'>
            <label htmlFor='name'>Your name : </label>
              <input
                  type='text'
                  id='name'
                  name='name'
                  autoComplete='off'
                  placeholder='Your name'
                />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Your email: </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  autoComplete='off'
                placeholder='Your email'
                />
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Your phone: </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  autoComplete='off'
                placeholder='Your phone'
                />
            </div>
          </div>
            <div className='form-control'>
              <label htmlFor='text'>Your message: </label>
                <textarea
                  id='text'
                name='text'
                rows="4" cols="50"
                placeholder='Your message'
                />
            </div>
          <button type='submit' className='btn'>submit</button>
            </div>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts