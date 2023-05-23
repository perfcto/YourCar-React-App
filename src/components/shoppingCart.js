import classes from './shoppingCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const ShoppingCart = (props) => {
  const val = useRef();
  const addCar = () => {
    const car = {
      imgNum: val.current.id,
      type: val.current.children[1].children[0].innerText,
      CarName: val.current.children[1].children[1].innerText,
      id: val.current.id,
      amount: 1,
      action: 'ADD',
    };
    props.onAddVal(car);

    // console.log(car);
  };
  const removeCar = () => {
    const car = {
      imgNum: val.current.id,
      type: val.current.children[1].children[0].innerText,
      CarName: val.current.children[1].children[1].innerText,
      id: val.current.id,
      amount: 1,
      action: 'REMOVE',
    };
    props.onRemoveVal(car);
  };
  const delCar = () => {
    const car = {
      imgNum: val.current.id,
      type: val.current.children[1].children[0].innerText,
      CarName: val.current.children[1].children[1].innerText,
      id: val.current.id,
      amount: 1,
      action: 'DElETE',
    };
    props.onDeleteVal(car);
  };
  const delAll = () => {
    const car = {
      action: 'DElETE All',
    };
    props.onDeleteAll(car);
  };
  return (
    <div className={classes.shopping}>
      <ul className={classes.carsList}>
        {props.data.length > 0
          ? props.data.map((car) => {
              return (
                <li
                  ref={val}
                  key={Math.random()}
                  id={car.id}
                  className={classes.car}>
                  <div className={classes.carImg}>
                    {' '}
                    <img
                      src={require(`../imgs/car (${car.imgNum}).png`)}
                      alt='car'
                    />
                  </div>
                  <div className={classes.carInfo}>
                    <h4>{car.type}</h4>
                    <p>{car.CarName} </p>
                    <div className={classes.carButtons}>
                      {' '}
                      <div>
                        <button onClick={removeCar}>-</button>
                        <button className={classes.num}>{car.amount}</button>
                        <button onClick={addCar}>+</button>
                      </div>
                      <button onClick={delCar} className={classes.Trash}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ul>

      <button className={classes.deleteBtn} onClick={delAll}>
        Delete All
      </button>
    </div>
  );
};

export default ShoppingCart;
