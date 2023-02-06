import React from "react";
import { Data } from "./Data";
import "./Portfolio.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Portfolio = () => {
  return (
    <section className="portfolio container section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>

      <Swiper
        className="portfolio__container"
        loop={true}
        grabCursor={true}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link1, link2 }) => {
          return (
            <SwiperSlide className="portfolio__card" key={id}>
              <img src={image} alt="" className="portfolio__img" />

              <h3 className="portfolio__name">{title}</h3>
              <p className="portfolio__description">{description}</p>
              <a href={link1} target="_blank">
                <button className="portfolio__code">Source Code</button>
              </a>
              <a href={link2} target="_blank">
                <button className="portfolio__deploy">Deployment</button>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
