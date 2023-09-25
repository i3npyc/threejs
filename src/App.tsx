import React from "react";

import { Canvas } from "@react-three/fiber";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Experience } from "./components/Experience";
import { Mustang } from "./components/Mustang";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { SelBlender } from "./components/SelBlender";
import { Spitfire } from "./components/Spitfire";

function App() {
  return (
    <Swiper
      effect="coverflow"
      centeredSlides
      slidesPerView={3}
      initialSlide={1}
      spaceBetween={40}
      speed={500}
      parallax
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      }}
      allowTouchMove={false}
      navigation
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Canvas shadows camera={{ position: [6, 1.5, 1], fov: 70 }}>
          <Experience>
            <Mustang />
          </Experience>
        </Canvas>
      </SwiperSlide>

      <SwiperSlide>
        <Canvas shadows camera={{ position: [6, 1.5, 6], fov: 50 }}>
          <Experience>
            <SelBlender />
          </Experience>
        </Canvas>
      </SwiperSlide>

      <SwiperSlide>
        <Canvas
          style={{ height: "100%" }}
          shadows
          camera={{ position: [6, 1, 6], fov: 70 }}
        >
          <Experience>
            <Spitfire />
          </Experience>
        </Canvas>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
