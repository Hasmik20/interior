import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Error = () => {
  return (
    <section className='section error-container '>
      <Link to='/' className="link-container">
        <AiOutlineArrowRight/>
        <p>Go Home</p>
      </Link>
    
    </section>
  );
};
export default Error;
