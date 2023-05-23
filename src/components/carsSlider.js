import React, { useState, useRef } from 'react';
// Import Swiper React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from './carsSlider.module.css';
import CarCard from '../components/carCard';
import data from '../imgs/data.json';

const CarsSlider = (props) => {
  const carsObj = data.cars.map((item, i) => {
    return {
      ...item,
      src: i + 1,
    };
  });
  const [cars, setCars] = useState(carsObj);
  // const [carsCArd, setCarsCArd] = useState([]);

  const getCarValFromCard = (el) => {
    props.OnGetTheValue(el);
  };

  return (
    <section className={classes.carsSlider}>
      <h1>CARS</h1>
      <h3>Cars</h3>
      <ul className={classes.carsSliderList}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            //navigation(arrows)
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              width: 380,
            },
            // when window width is >= 480px
            400: {
              slidesPerView: 1,
              width: 380,
            },
            // when window width is >= 640px
          }}
          onSlideChange={() => console.log()}
          onSwiper={(swiper) => console.log()}>
          {cars.map((car) => {
            return (
              <SwiperSlide key={Math.random().toString()}>
                {' '}
                <CarCard
                  onAdd={getCarValFromCard}
                  onRemove={getCarValFromCard}
                  key={Math.random()}
                  img={car.src}
                  type={car.class}
                  name={car.name}
                  dis={car.description}
                  luggage={car.luggage}
                  seats={car.seats}></CarCard>
              </SwiperSlide>
            );
          })}
          <div class={`swiper-button-next ${classes.btnNext}`}>
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
          <div class={`swiper-button-prev  ${classes.btnPrev} `}>
            {' '}
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </div>
        </Swiper>
      </ul>
    </section>
  );
};
export default CarsSlider;
