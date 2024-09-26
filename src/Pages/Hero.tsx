import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { images } from "@/assets/images"; // Ensure this path is correct
import { Button } from '@/components/ui/button';
import { GoArrowRight } from "react-icons/go";

function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
      {/* Static text that stays in the center */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 sm:max-w-4xl sm:mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-center font-sans">
            Innovative Learning with Traditional Values
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-lg font-light text-center mt-4 max-w-lg sm:max-w-2xl px-4">
            Experience transformative education at Guagua National Colleges. <br />Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Button className="rounded-full bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
            Explore Online <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
        </Button>
        <Button className="bg-white text-gray-800 p-4 sm:p-8 text-base sm:text-lg rounded-full flex items-center justify-center">
            Our Programs
        </Button>
        </div>
        </div>


      {/* Swiper background slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false, // Allow autoplay to continue after interaction
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{ height: '100%' }} // Ensure Swiper takes full height
        grabCursor={true} // Enable grab cursor
      >
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.slider2})`, // Use image from your assets
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.slider4})`, // Use image from your assets
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.slider5})`, // Use image from your assets
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.slider6})`, // Use image from your assets
            height: '100%',
          }}
        ></SwiperSlide>
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Optional overlay */}
    </div>
  );
}

export default Hero;
