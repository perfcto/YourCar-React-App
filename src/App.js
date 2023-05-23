import React, { Fragment } from 'react';
import LandingPage from './components/landingPage';
import AboutUs from './components/about';
import Services from './components/services';
import CarsSlider from './components/carsSlider';
import CarGallery from './components/carGallery';
import Testimonials from './components/testimonials';
import CarsType from './components/carsType';
import Footer from './components/footer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [shoppingArr, setShoppingArr] = useState({
    carsItem: [],
    totalAmount: 0,
  });

  useEffect(() => {
    console.log(localStorage.getItem('cars'));

    setShoppingArr((prev) => {
      return JSON.parse(localStorage.getItem('cars'));
    });
  }, []);
  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(shoppingArr));
  }, [shoppingArr]);

  const getVAl = (ele) => {
    if (ele.action === 'ADD') {
      setShoppingArr((prev) => {
        const existingCarIndex = prev.carsItem.findIndex(
          (car) => car.id === ele.id,
        );
        const existingCar = prev.carsItem[existingCarIndex];

        let updatedCars = [];

        if (existingCar) {
          const updatedCar = {
            ...existingCar,
            amount: existingCar.amount + 1,
          };

          const noExistingCar = prev.carsItem.filter((car) => {
            return car.id !== existingCar.id;
          });
          updatedCars = [
            ...noExistingCar,
            (updatedCars[existingCarIndex] = updatedCar),
          ];
        } else {
          updatedCars = prev.carsItem.concat(ele);
        }
        const total = updatedCars.reduce((cur, next) => {
          return (cur += next.amount);
        }, 0);

        localStorage.setItem(
          'cars',
          JSON.stringify({
            carsItem: [...updatedCars],
            totalAmount: total,
          }),
        );
        return {
          carsItem: [...updatedCars],
          totalAmount: total,
        };
      });
    } else if (ele.action === 'REMOVE') {
      setShoppingArr((prev) => {
        const existingCarIndex = prev.carsItem.findIndex(
          (car) => car.id === ele.id,
        );
        const existingCar = prev.carsItem[existingCarIndex];

        let updatedCars = [];

        if (existingCar && existingCar.amount >= 1) {
          const updatedCar = {
            ...existingCar,
            amount: existingCar.amount - 1,
          };

          const noExistingCar = prev.carsItem.filter((car) => {
            return car.id !== existingCar.id;
          });

          updatedCars = [
            ...noExistingCar,
            (updatedCars[existingCarIndex] = updatedCar),
          ];
        } else {
          const noExistingCar = prev.carsItem.filter((car) => {
            return car.amount > 0;
          });
          updatedCars = [...noExistingCar];
          alert('no Item like this in Shopping Cart');
        }
        let total;
        if (prev.totalAmount === 0) {
          total = 0;
        } else {
          total = updatedCars.reduce((cur, next) => {
            if (updatedCars.length > 1) {
              return cur - 1;
            } else {
              return next.amount - 1;
            }
          }, prev.totalAmount);
        }
        if (prev.carsItem.length > 0) {
          localStorage.setItem(
            'cars',
            JSON.stringify({
              carsItem: [...updatedCars],
              totalAmount: total,
            }),
          );
          return {
            carsItem: [...updatedCars],
            totalAmount: total,
          };
        } else {
          alert('no Items in Shopping Cart');
          localStorage.setItem(
            'cars',
            JSON.stringify({
              carsItem: [],
              totalAmount: 0,
            }),
          );
          return {
            carsItem: [],
            totalAmount: 0,
          };
        }
      });
    } else if (ele.action === 'DElETE') {
      setShoppingArr((prev) => {
        if (prev.carsItem.length > 0) {
          const existingCarIndex = prev.carsItem.findIndex(
            (car) => car.id === ele.id,
          );

          const existingCar = prev.carsItem[existingCarIndex];
          console.log(existingCar);
          let updatedCars = [];

          console.log(prev.carsItem);
          if (existingCar) {
            const noExistingCar = prev.carsItem.filter((car) => {
              return car.id !== ele.id;
            });

            updatedCars = [...noExistingCar];
          } else {
            updatedCars = [...prev.carsItem];
            console.log(updatedCars, 'else');
          }
          let total;

          if (prev.totalAmount === 0) {
            total = 0;
          } else {
            total = updatedCars.reduce((cur, next) => {
              return cur + next.amount;
            }, 0);
          }
          localStorage.setItem(
            'cars',
            JSON.stringify({
              carsItem: [...updatedCars],
              totalAmount: total,
            }),
          );
          return {
            carsItem: [...updatedCars],
            totalAmount: total,
          };
        } else {
          return {
            carsItem: [],
            totalAmount: 0,
          };
        }
      });
    } else {
      setShoppingArr((prev) => {
        return {
          carsItem: [],
          totalAmount: 0,
        };
      });
    }
  };

  return (
    <Fragment>
      <main>
        <LandingPage
          numOfItems={shoppingArr.totalAmount}
          dataShopping={shoppingArr.carsItem}
          OnGetTheValue={getVAl}
        />
        <AboutUs />
        <Services />
        <CarsSlider OnGetTheValue={getVAl} />
        <CarGallery />
        <Testimonials />
        <CarsType />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
