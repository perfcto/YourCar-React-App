import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faInstagram,
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoAndDes}>
        <h3>
          {' '}
          Your <span>Car</span>
        </h3>
        <p>
          We are known for luxurious and premium chaffeur services worldwide. We
          are simply the best you can find.
        </p>
        <p>
          we are dedicated to providing our customers with a first-class car
          buying, selling, and renting experience.
        </p>
      </div>
      <div className={classes.newsAndInput}>
        <h4>News Letter</h4>
        <p>
          Subscribe to our news letter for updates, news and exclusive offers
        </p>
        <form className={classes.inputForm}>
          <input type='email' placeholder='Email'></input>
          <button>Subscribe</button>
        </form>
        {/* <div className={classes.socialIcons}> */}
        {/* <FontAwesomeIcon icon={faFacebookF} /> */}
        {/* <FontAwesomeIcon icon={faAdjust} /> */}
        {/* <FontAwesomeIcon icon={faAdjust} /> */}
        {/* <FontAwesomeIcon icon={faInstagram} /> */}
        {/* </div> */}
      </div>
      <div className={classes.contactInfoDiv}>
        <h4>Contact</h4>
        <ul className={classes.contactInfo}>
          <li>
            {' '}
            <FontAwesomeIcon icon={faLocationDot} />
            <p>2038 2nd Avenue, Las Vegas, United States</p>
          </li>
          <li>
            {' '}
            <FontAwesomeIcon icon={faPhone} />
            <p>01444773421423 01477678449405 </p>
          </li>
          <li>
            {' '}
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@YourCar.com </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
