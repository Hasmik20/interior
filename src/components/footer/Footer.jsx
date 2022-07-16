import { Link } from 'react-router-dom'


import Logo from '../../util/img/logo.jpg'
import { socialList} from '../nav/navList'

const Footer = () => {
  const today = new Date()
  return (
    <section>

      <footer className='footer-container'>
        <div className='container'>

          <div className='logo-container'>
            <Link to="/">
            <img src={Logo} alt="logo"className='logo' />
            </Link>
          </div>
          <div className='info-container'>
            <h4>Studio</h4>
            <div className='info'>
              <Link to="/contact" > Contact Us </Link>
              <Link to="/about" > About </Link>
              <Link to="/projects" > Projects </Link>
            </div>
          </div>
          <div className='info-container'>
            <h4>Services</h4>
            <div className='info'>
              <Link to="/services" > Interior Design </Link>
              <Link to="/services" > Interior Architecture </Link>
              <Link to="/services" > Lighting Design </Link>
            </div>
          </div>
          <div className='info-container'>
            <h4>Social</h4>
              <ul className='info'>
                {
                  socialList.map(item => {
                    const { id, url, icon } = item
                    return <li key={id}>
                    <a href={url} className='social-logo' >
                      {icon}
                    </a>
                  </li>
                  })
                }
            </ul>
          </div>
        </div>
      </footer>
      <div className='copyRight'>
        <p>&copy; { today.getFullYear()}, <i>  Simply Home</i></p>
      </div>
    </section>
  )
}

export default Footer