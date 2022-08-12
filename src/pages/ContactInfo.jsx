import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";



const ContactInfo = () => {
  return (
    <>
      <div className='contact-head'>
        <div className="container">
          <h3>Our Contacts</h3>
          <div className="info-container">
            <div className='info'>
              <AiOutlinePhone className="icon" />
              <span>
                  {/* telephone */}
                <a href='tel:123-456-7890'> +(374)010-99-99-99
                </a>
              </span>
            </div>
            <div className='info'>
              <AiOutlineMail  className="icon"/>
              <span><a href="mailto:test@yahoo.com?subject=Let's%20talk&body=The%20body%20of%20the%20email">
                  simply_home@interior.org
              </a></span> 
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default ContactInfo