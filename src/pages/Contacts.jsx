import {useState} from 'react'

import ContactInfo from './ContactInfo'



const Contacts = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    text:""
  })

  const addDataHandler = (e) => {
    const {name,value} = e.target
    setData({ ...data, [name]: value })
  
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
    name: "",
    email: "",
    phone: "",
    text:""
  })
      console.log(data)
  }
  return (
    <section className='contact-container'>
      <div className='container'>

        <ContactInfo />
      <div className="form-container">
        <h4> Book a complimentary phone consultation with us to discuss your next project.
        </h4>
          <form onSubmit={submitHandler}>
            <div className='inputs-container'>
          <div className='gridContainer'>
                
          <div className='form-control'>
            <label htmlFor='name'>Your name : </label>
              <input
                  type='text'
                  id='name'
                    name='name'
                    value={data.name}
                    autoComplete='off'
                    placeholder='Your name'
                    onChange={addDataHandler}
                />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Your email: </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={data.email}
                  autoComplete='off'
                  placeholder='Your email'
                  onChange={addDataHandler}
                />
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Your phone: </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={data.phone}
                  autoComplete='off'
                  placeholder='Your phone'
                  onChange={addDataHandler}
                />
            </div>
          </div>
            <div className='form-control'>
              <label htmlFor='text'>Your message: </label>
                <textarea
                  id='text'
                  name='text'
                  value={data.text}
                 rows="4" cols="50"
                  placeholder='Your message'
                  onChange={addDataHandler}
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