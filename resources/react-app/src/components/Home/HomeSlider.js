import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import "swiper/css/autoplay";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeSlider = (props) => {
    const swiperReff = useRef(null);
    const [nextModal, setNextModal] = useState(false);
    const [activeSlider2, setActiveSlider2] = useState(0);
    const [realIn, setRealIn] = useState();

    const handleSlideChange = (swiper) => {
        setRealIn(swiper.realIndex);

        if (props.data.length - 1 === activeSlider2) {
            setNextModal(false);
            setActiveSlider2(0);
        } else if (realIn !== swiper.realIndex) {
            setActiveSlider2(activeSlider2 + 1);
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
                grabCursor={true}
                modules={[Autoplay, EffectCreative]}
                effect="creative"
                fadeEffect={{ crossFade: true }}
                loop={true}
                pagination={true}
                ref={swiperReff}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                onSlideChange={handleSlideChange}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                }}
                speed={500}
                className="mySwiper w-full h-screen max-md:h-[300px] mb-20 mt-7 max-md:mt-8 max-md:mb-10 relative"
            >
                {props.data.map((item, i) => (
                    <SwiperSlide className="w-full relative" key={i}>
                        <img
                            className="w-full h-full"
                            src={item.slider_image}
                            alt="Slider"
                        />
                        <img
                            className="absolute bottom-0 z-[130]  max-xl:hidden right-0 h-full w-full  object-fill hover:translate-x-4 duration-200 delay-200 "
                            src={item.slider_image}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(91% 0px, 100% 0px, 100% 100%, 64% 100%, 25% 100%, 50.5% 100%)",
                            }}
                        />
                        <div
                            style={{
                                clipPath:
                                    "polygon(91% 0px, 100% 0px, 100% 100%, 64% 100%, 25% 100%, 50% 100%)",
                            }}
                            className="absolute bottom-0  max-xl:hidden bg-white z-[120] right-0 h-[101%] w-full object-cover "
                        />
                        <img
                            onClick={handlePrev}
                            className="custom-next absolute bottom-0 z-[150] right-0 h-3/4 max-md:h-[90%] w-1/4 max-md:w-[5rem] object-cover  hover:translate-x-4 duration-200 delay-200 cursor-pointer"
                            src={props?.data[activeSlider2].slider_image}
                            onMouseEnter={() => setNextModal(true)}
                            onMouseLeave={() => setNextModal(false)}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0%, 100% 28%, 3% 100%, 25% 100%, 6.75% 100%)",
                                zIndex: 200,
                            }}
                        />

                        <div
                            style={{
                                clipPath:
                                    "polygon(100% 100%, 100% 0%, 100% 28%, 0% 100%, 25% 100%, 6.75% 100%)",
                            }}
                            className="absolute bottom-0   bg-white z-[140] right-0 h-[77%] max-md:h-[93%] w-1/4  max-md:w-[5.25rem]  object-cover "
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
