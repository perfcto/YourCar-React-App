import classes from '../components/services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faStar, faGem } from '@fortawesome/free-solid-svg-icons';

import servicesImg from '../imgs/ServicesImg.png';

const Services = () => {
  return (
    <section className={classes.services}>
      <h1>SERVICES</h1>
      <h3>Services</h3>
      <img src={servicesImg} alt='services' />
      <div className={classes.servicesCards}>
        <div className={classes.servicesCard}>
          <FontAwesomeIcon icon={faStar} className={classes.icon} />
          <h2>Car rental</h2>
          <p>
            Car sales At YourCar, we offer a wide selection of luxury vehicles
            for sale. Whether you're in the market for a sleek sports car or a
            spacious SUV, we have the perfect vehicle to fit your needs.
          </p>
        </div>
        <div className={classes.servicesCard}>
          <FontAwesomeIcon icon={faHandshake} className={classes.icon} />
          <h2>Car rental</h2>
          <p>
            Car rental If you're in need of a luxury car rental, look no further
            than YourCar. Our fleet of high-end vehicles is regularly maintained
            and serviced to ensure that you have a safe and comfortable driving
            experience.
          </p>
        </div>
        <div className={classes.servicesCard}>
          <FontAwesomeIcon icon={faGem} className={classes.icon} />
          <h2>Car rental</h2>
          <p>
            Car selling At YourCar, we make it easy to sell your car. Simply
            bring your vehicle in for an appraisal, and we'll handle the rest.
            We offer fair prices and a hassle-free selling process, so you can
            get your vehicle with minimal effort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
