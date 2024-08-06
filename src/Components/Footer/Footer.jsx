import { FaFacebook, FaInstagram, FaInternetExplorer, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../../../public/restaurant-icon.png';

const Footer = () => {
  return (
    <>
      <footer className="footer mt-10 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 text-white text-base md:text-xl p-10">
        <nav>
          <h6 className="footer-title">Menu</h6>
          <a className="link link-hover">Appetizers</a>
          <a className="link link-hover">Main Courses</a>
          <a className="link link-hover">Desserts</a>
          <a className="link link-hover">Beverages</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover">Phone: (123) 456-7890</a>
          <a className="link link-hover">Email: contact@restaurant.com</a>
          <a className="link link-hover">Location: Dhaka, Bangladesh</a>
        </nav>
        <nav>
          <h6 className="footer-title">Opening Hours</h6>
          <a className="link link-hover">Mon - Fri: 10am - 10pm</a>
          <a className="link link-hover">Sat - Sun: 11am - 11pm</a>
          <a className="link link-hover">Holidays: Closed</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 text-white border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className='h-16 w-16' src={logo} alt="Logo Icon" />
          <p className='text-xl'>
            Tasteful Table
            <br />
            <span className='text-sm'>Serving delicious food since 2007</span>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
      <Link to="https://www.facebook.com/ns.shafin.5/" target='_blank'>
        <FaFacebook size={24} />
      </Link>
      <Link to="https://www.instagram.com/mdnazmussakibshafi/" target='_blank'>
        <FaInstagram size={24} />
      </Link>
      <Link to="https://x.com/nazmus_sakib90" target='_blank'>
        <FaSquareXTwitter size={24} />
      </Link>
      <Link to="https://www.linkedin.com/in/md-nazmus-sakib-shafin-781357254/" target='_blank'>
        <FaLinkedin size={24} />
      </Link>
      <Link to="https://shafin-portfolio-site.netlify.app/" target='_blank'>
        <FaInternetExplorer size={24} />
      </Link>
    </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;