import React from "react";
// import ReactPlayer from "react-player/lazy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const PlayVideo = () => {
  // const arr = [1, 2, 3];
  return (
    <>
      <div className="homeSlider">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video autoPlay muted height="350px" width="100%">
              <source
                src="https://media.xrbazaar.co/wp-content/uploads/2023/11/11113856/PreviewOpt.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>

          <SwiperSlide>
            <video autoPlay muted height="350px" width="100%">
              <source
                src="https://media.xrbazaar.co/wp-content/uploads/2023/08/18192040/MyWinterLookLens.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted height="350px" width="100%">
              <source
                src="https://media.xrbazaar.co/wp-content/uploads/2023/08/20051555/preview.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PlayVideo;
