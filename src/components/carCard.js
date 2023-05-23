import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import classes from './carCard.module.css';
import { useRef } from 'react';

const CarCard = (props) => {
  const num = useRef();
  const num2 = useRef();

  const addCarObjToLanding = () => {
    const car = {
      imgNum: num.current.id,
      type: num.current.children[1].innerText,
      CarName: num.current.children[2].innerText,
      id: num.current.id,
      amount: 1,
      action: 'ADD',
    };

    props.onAdd(car);
  };

  const removeCarObjFromLanding = () => {
    const car = {
      imgNum: num.current.id,
      type: num.current.children[1].innerText,
      CarName: num.current.children[2].innerText,
      id: num.current.id,
      amount: 1,
      action: 'REMOVE',
    };

    props.onRemove(car);
  };

  return (
    <li className={classes.car} ref={num} id={props.img}>
      <img src={require(`../imgs/car (${props.img}).png`)} alt='car' />
      <h2>{props.type}</h2>
      <span>{props.name}</span>
      <p className={classes.pragraph}>{props.dis}</p>
      <div className={classes.ditBox}>
        <div className={classes.seatsAndLuggage}>
          <div className={classes.seats}>
            <FontAwesomeIcon icon={faPerson} size='2x' />
            <p>{props.seats} seats</p>
          </div>
          <div className={classes.luggage}>
            <FontAwesomeIcon icon={faSuitcaseRolling} size='2x' />
            <p>{props.luggage} luggage</p>
          </div>
        </div>
        <div className={classes.numbers}>
          <button onClick={removeCarObjFromLanding}>-</button>
          <button ref={num2} className={classes.buttonNum}>
            1
          </button>
          <button onClick={addCarObjToLanding}>+</button>
        </div>
      </div>
    </li>
  );
};
export default CarCard;
/*
  const addCarObjToLanding = () => {
    console.log('is', carVAl);

    if (carVAl.length > 0) {
      for (let i = 0; i < carVAl.length; i++) {
        console.log(i.id);

        if (i.id !== num.current.id) {
          console.log('medo');
          return;
        } else {
          setCarVAl((prev) => {
            return [
              ...prev,
              {
                imgNum: num.current.id,
                type: num.current.children[1].innerText,
                CarName: num.current.children[2].innerText,
                id: num.current.id,
                amount: 1,
              },
            ];
          });
        }
      }
    } else {
      setCarVAl((prev) => {
        return [
          {
            imgNum: num.current.id,
            type: num.current.children[1].innerText,
            CarName: num.current.children[2].innerText,
            id: num.current.id,
            amount: 1,
          },
        ];
      });
    }
    console.log('are', carVAl);
  };*/
