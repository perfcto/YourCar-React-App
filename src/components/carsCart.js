import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './carsCart.module.css';

const CarsCart = (props) => {
  return (
    <div className={classes.iconsDiv}>
      <button onClick={props.toggle} className={classes.f}>
        <span>{props.numOfCars}</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <button onClick={props.toggleLinks} className={`${classes.bars}`}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default CarsCart;
