import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SliderComp() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              width={1920}
              height={600}
              src="/commerce.png"
              alt="loading"
            />
            <Link
              href="#contactUs"
              className="absolute py-2 px-4 bottom-0 left-0 w-full  bg-[#f59e0b] text-white font-semibold flex items-center gap-1"
            >
              Explore Now
              <ChevronRight />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              width={1920}
              height={600}
              src="/Blogs and content website.png"
              alt="loading"
            />
            <Link
              href="#contactUs"
              className="absolute py-2 px-4 bottom-0 left-0 w-full  bg-[#f59e0b] text-white font-semibold flex items-center gap-1"
            >
              Explore Now
              <ChevronRight />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              width={1920}
              height={600}
              src="/_Landing Pages.png"
              alt="loading"
            />
            <Link
              href="#contactUs"
              className="absolute py-2 px-4 bottom-0 left-0 w-full  bg-[#f59e0b] text-white font-semibold flex items-center gap-1"
            >
              Explore Now
              <ChevronRight />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              width={1920}
              height={600}
              src="/business.png"
              alt="loading"
            />
            <Link
              href="#contactUs"
              className="absolute py-2 px-4 bottom-0 left-0 w-full  bg-[#f59e0b] text-white font-semibold flex items-center gap-1"
            >
              Explore Now
              <ChevronRight />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              width={1920}
              height={600}
              src="/_Portfolio.png"
              alt="loading"
            />
            <Link
              href="#contactUs"
              className="absolute py-2 px-4 bottom-0 left-0 w-full  bg-[#f59e0b] text-white font-semibold flex items-center gap-1"
            >
              Explore Now
              <ChevronRight />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
