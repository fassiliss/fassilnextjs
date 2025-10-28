import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Client = () => {
  return (
    <div id="client">
      <div className="container">
        <div className="bg-primary client-container  wow fadeInUp">
          <Swiper {...sliderProps.logo} className="swiper client-slider">
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/1.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/2.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/3.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/4.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/5.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/1.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/2.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/3.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/4.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/5.png" alt="image" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Client;
