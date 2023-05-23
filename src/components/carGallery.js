import React from 'react';
import classes from './carGallery.module.css';
const CarGallery = () => {
  const carsPhoto = [];
  for (let i = 0; i < 9; i++) {
    carsPhoto.push(`../imgs/carGallary (${i + 1}).png`);
  }

  return (
    <section className={classes.carGallery}>
      <ul className={classes.carsList}>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (1).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (2).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (3).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (4).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (5).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (6).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (7).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (8).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
        <li className={classes.carImg}>
          <img src={require('../imgs/carGallary (9).png')} alt='car' />
          <div className={classes.photoDit}>
            <h4>Tesla Model 3</h4>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CarGallery;
