import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const craving = () => {
  return (
    <>
      <div className="container">
        <div class="sc-dCFHLb cZLvve">
          <div class="sc-fhzFiK cLXIKF my-4">
            <h2 class="sc-aXZVg bwoZPF title">What's on your mind?</h2>
            <div class="sc-aXZVg kdMXvo"></div>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={6}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <a
              aria-label="restaurants curated for north indian"
              class="sc-camqpD gJAVSL"
            >
              <div height="180" width="144" class="sc-eIcdZJ bzMzZQ">
                <img
                  class="sc-kAyceB eDtXYp"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"
                  width="144"
                  height="180"
                  alt="restaurants curated for north indian"
                />
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
        <div className="row">
          <div className="sc-jdUcAg ddQQse"></div>
        </div>{" "}
      </div>
    </>
  );
};

export default craving;
