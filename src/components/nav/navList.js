import { FaFacebookSquare, FaInstagram, FaMailBulk } from "react-icons/fa";

export const navLinks = [
   {
    id: 1,
    url: '/',
    text: 'home',
  },
   {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/services',
    text: 'services',
  },
 
  // {
  //   id: 4,
  //   url: '/projects',
  //   text: 'projects',
  // },
  // {
  //   id: 5,
  //   url: '/shop',
  //   text: 'shop',
  // },
  {
    id: 6,
    url: '/contact',
    text: 'contact us',
  },
]

export const socialList = [
   {
    id: 1,
    url: 'https://www.facebook.com/SimplyHomeDesignTheHague',
    icon: <FaFacebookSquare/>,
  },
  {
    id: 2,
    url: 'https://www.instagram.com/simplyhomedesignpage/',
    icon: <FaInstagram/>
  },
  {
    id: 3,
    url: "mailto:h_aghayan@yahoo.com?subject=Let's%20talk&body=The%20body%20of%20the%20email",
    icon: <FaMailBulk />,
  },

]