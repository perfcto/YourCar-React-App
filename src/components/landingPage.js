import React from 'react';
import CarsCart from './carsCart';
import classes from './landingPage.module.css';
import ShoppingCart from './shoppingCart';
// Specify all properties: name, family, style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';

const LandingPage = (props) => {
  const [arr, setArr] = useState(props.dataShopping);
  const [cartShown, setCArtShown] = useState(false);
  const [LinksShown, setLinksShown] = useState(false);

  const toggleCartHandler = () => {
    if (cartShown === false) {
      setCArtShown(true);
    } else {
      setCArtShown(false);
    }
  };
  const toggleLinksHandler = () => {
    if (LinksShown === false) {
      setLinksShown(true);
    } else {
      setLinksShown(false);
    }
  };
  const getAddVAl = (ele) => {
    props.OnGetTheValue(ele);
  };

  useEffect(() => {
    setArr(props.dataShopping);
  }, [props.dataShopping]);
  return (
    <section className={classes.landing}>
      <div className={classes.container}>
        <nav className={classes.navBar}>
          <p className={classes.logo}>
            {' '}
            <span> Your</span> Card
          </p>

          <div className={classes.links}>
            <ul
              className={`${classes.linksSection} ${
                LinksShown ? classes.visible : ''
              }`}>
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Services</button>
              </li>
              <li>
                <button>Cars</button>
              </li>
              <li>
                <button>Contact us </button>
              </li>
            </ul>
            <div className={classes.cartShopping}>
              <CarsCart
                numOfCars={props.numOfItems}
                toggle={toggleCartHandler}
                toggleLinks={toggleLinksHandler}
              />
            </div>
          </div>
        </nav>
        <div className={classes.details}>
          <h1 className='heading'>Find the perfect car for you at YourCar.</h1>
          <p className='paragraph'>
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </p>
          <button>
            Discover <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        {cartShown && (
          <ShoppingCart
            data={arr}
            onAddVal={getAddVAl}
            onRemoveVal={getAddVAl}
            onDeleteVal={getAddVAl}
            onDeleteAll={getAddVAl}
          />
        )}
      </div>
    </section>
  );
};

export default LandingPage;
