import classes from './testimonialCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const TestimonialCard = (props) => {
  return (
    <li className={classes.card} key={Math.random() * 5}>
      <p className={classes.dis}>{props.description}</p>
      <ul className={classes.stars}>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
      </ul>
      <div className={classes.clintDit}>
        <h4>{props.name}</h4>
        <p>Las vegas</p>
        <img
          src={require(`../imgs/car (${props.carNum}).png`)}
          alt='clint car '
        />
      </div>
    </li>
  );
};

export default TestimonialCard;
