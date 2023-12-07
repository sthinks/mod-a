import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "swiper/css/autoplay";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeSlider = (props) => {
    const swiperReff = useRef(null);
    const [nextModal, setNextModal] = useState(false);
    const [activeSlider, setActiveSlider] = useState(0);

    const handleSlideChange = () => {
        if (props.data.length - 1 === activeSlider) {
            setNextModal(false);
            setActiveSlider(0);
        } else {
            setActiveSlider(activeSlider + 1);
            setNextModal(false);
        }
    };
    const handlePrev = useCallback(() => {
        if (!swiperReff.current) return;
        swiperReff.current.swiper.slideNext();
        setNextModal(false);
    }, []);
    const navigate = useNavigate();
    return (
        props.data && (
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                fadeEffect={{ crossFade: true }}
                loop={true}
                pagination={true}
                ref={swiperReff}
                onSlideChange={handleSlideChange}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                }}
                className="mySwiper w-full h-screen max-md:h-[300px] mb-20 mt-12 max-md:mt-8 max-md:mb-10 relative"
            >
                {props.data.map((item, i) => (
                    <SwiperSlide className="w-full relative" key={i}>
                        <img
                            className="w-full h-full"
                            src={item.small_image}
                            alt="Slider"
                        />
                        <img
                            className="absolute bottom-0 z-[130]  max-xl:hidden right-0 h-full w-[50rem]  object-cover hover:translate-x-4 duration-200 delay-200 cursor-pointer"
                            src={props?.data[activeSlider].small_image}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(100% 0, 100% 0, 100% 28%, 100% 100%, 0 100%, 0 100%)",
                            }}
                        />
                        <div
                            style={{
                                clipPath:
                                    "polygon(100% 0, 100% 0, 100% 28%, 100% 100%, 0 100%, 0 100%)",
                            }}
                            className="absolute bottom-0  max-xl:hidden bg-white z-[120] right-0 h-[101%] w-[50.8rem] object-cover cursor-pointer"
                        />
                        <img
                            onClick={handlePrev}
                            className="custom-next absolute bottom-0 z-[150] right-0 h-3/4 max-md:h-[90%] w-[30rem] max-md:w-[5rem] object-cover  hover:translate-x-4 duration-200 delay-200 cursor-pointer"
                            src={props?.data[activeSlider].small_image}
                            onMouseEnter={() => setNextModal(true)}
                            onMouseLeave={() => setNextModal(false)}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0%, 100% 28%, 0% 100%, 25% 100%, 6.75% 100%)",
                                zIndex: 200,
                            }}
                        />

                        <div
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0%, 100% 28%, 0% 100%, 25% 100%, 6.75% 100%)",
                            }}
                            className="absolute bottom-0   bg-white z-[140] right-0 h-[77%] max-md:h-[93%] w-[31rem] max-md:w-[5.25rem]  object-cover cursor-pointer"
                        />
                        <p
                            onClick={handlePrev}
                            onMouseEnter={() => setNextModal(true)}
                            style={{
                                zIndex: 200, // Adjusted z-index value
                            }}
                            className={`absolute z-[200] right-0 bottom-10  object-cover cursor-pointer transform ${
                                nextModal
                                    ? "-translate-x-20 transition-transform duration-300 delay-300"
                                    : "translate-x-20"
                            }`}
                        >
                            <GrFormNextLink className="text-8xl text-white" />
                        </p>
                        <div
                            className="absolute z-20 bg-[#00000065]  h-20 w-full bottom-0 left-0  flex justify-start items-center px-20 max-md:px-10 cursor-pointer"
                            onClick={() => navigate(`projects/${item.slug}`)}
                        >
                            <p className="z-50 text-white text-xl max-md:text-base ">
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
