import classes from './testimonials.module.css';
import TestimonialCard from './testimonialCard';
import testimonialsData from '../imgs/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = (props) => {
  const tesDat = testimonialsData.testimonials;

  return (
    <section className={classes.testimonials}>
      <h1>TESTIMONIALS</h1>
      <h3>Testimonials</h3>
      <ul className={classes.testimonialsList}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {tesDat.map((tes, i) => {
            return (
              <SwiperSlide key={Math.random().toString()}>
                <TestimonialCard
                  key={Math.random().toString()}
                  name={tes.name}
                  description={tes.description}
                  carNum={i + 1}></TestimonialCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </section>
  );
};

export default Testimonials;
