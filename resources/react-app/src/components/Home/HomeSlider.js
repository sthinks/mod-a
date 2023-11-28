import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import singleLine from "../../assets/Home/singleLine.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HomeSlider = (props) => {
    const swiperReff = useRef(null);
    const [activeSlider, setActiveSlider] = useState(0);

    const handleSlideChange = () => {
        // Aktif slide'ın index numarasını al
        const currentIndex = swiperReff.current.swiper.activeIndex;
        setActiveSlider(currentIndex + 1);
        console.log(activeSlider);
    };
    return (
        props.data && (
            <Swiper
                pagination={true}
                ref={swiperReff}
                onSlideChange={handleSlideChange}
                className="mySwiper w-full h-screen mb-20 mt-12 max-md:mb-10 relative"
            >
                {props.data.map((item, i) => (
                    <SwiperSlide className="w-full relative" key={i}>
                        <img
                            className="w-full h-full"
                            src={item.small_image}
                            alt="Slider"
                        />
                        <img
                            className="absolute bottom-0 z-[130] max-md:hidden right-0 h-full w-[50rem] duration-200 delay-200 cursor-pointer"
                            src={item.small_image}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(88% 0, 100% 0, 100% 28%, 100% 100%, 25% 100%, 33% 100%)",
                            }}
                        />
                        <div
                            style={{
                                clipPath:
                                    "polygon(88% 0, 100% 0, 100% 28%, 57% 100%, 25% 100%, 33% 100%)",
                            }}
                            className="absolute bottom-0  max-md:hidden bg-white z-[120] right-0 h-[101%] w-[50.8rem] object-cover cursor-pointer"
                        />
                        <img
                            className="absolute bottom-0 z-[150] right-0 h-3/4 w-[30rem] object-cover  hover:translate-x-4 duration-200 delay-200 cursor-pointer"
                            src={props?.data[activeSlider].small_image}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0, 100% 28%, 57% 100%, 25% 100%, 33% 100%)",
                            }}
                        />

                        <div
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0, 100% 28%, 57% 100%, 25% 100%, 33% 100%)",
                            }}
                            className="absolute bottom-0  bg-white z-[140] right-0 h-[77%] w-[31rem] object-cover cursor-pointer"
                        />
                        <div className="absolute z-20 bg-[#00000065]  h-20 w-full bottom-0 left-0  flex justify-start items-center px-20   ">
                            <p className="z-50 text-white text-xl ">
                                {item.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    );
};

export default HomeSlider;
