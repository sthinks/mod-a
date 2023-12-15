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

const NewsSlider = (props) => {
    const swiperReff = useRef(null);
    const [nextModal, setNextModal] = useState(false);
    const [activeSlider2, setActiveSlider2] = useState(0);
    const [realIn, setRealIn] = useState();
    const handleSlideChange = (swiper) => {
        setRealIn(swiper.realIndex);

        if (activeSlider2 === 1 && realIn !== swiper.realIndex) {
            setNextModal(false);
            setActiveSlider2(0);
        } else if (realIn !== swiper.realIndex && activeSlider2 === 0) {
            setActiveSlider2(1);
            setNextModal(false);
        }
    };
    const handlePrev = useCallback(() => {
        if (!swiperReff.current) return;
        swiperReff.current.swiper.slideNext();
        setNextModal(false);
    }, []);
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
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                navigation={{
                    nextEl: ".custom-next",
                }}
                speed={500}
                className="mySwiper w-full h-auto max-md:h-[300px] mb-20 mt-7 max-md:mt-8 max-md:mb-10 relative"
            >
                {props.data.map((item, i) => (
                    <SwiperSlide className="w-full relative" key={i}>
                        <img
                            className="w-full h-full"
                            src={item}
                            alt="Slider"
                        />
                        <img
                            onClick={handlePrev}
                            className="custom-next absolute bottom-0 z-[150] right-0 h-full  w-full max-md:w-[5rem] object-cover  hover:translate-x-4 duration-200 delay-200 cursor-pointer"
                            src={props?.data[activeSlider2]}
                            onMouseEnter={() => setNextModal(true)}
                            onMouseLeave={() => setNextModal(false)}
                            alt="second"
                            style={{
                                clipPath:
                                    "polygon(100% 15px, 100% 0px, 100% 100%, 64% 100%, 25% 100%, 51.5% 100%)",
                                zIndex: 200,
                            }}
                        />

                        <div
                            style={{
                                clipPath:
                                    "polygon(100% 0px, 100% 0px, 100% 100%, 64% 100%, 25% 100%, 50% 100%)",
                            }}
                            className="absolute bottom-0   bg-white z-[140] right-0 h-full  w-full  max-md:w-[5.25rem]  object-cover "
                        />
                        <p
                            onClick={handlePrev}
                            onMouseEnter={() => setNextModal(true)}
                            style={{
                                zIndex: 200, // Adjusted z-index value
                            }}
                            className={`absolute z-[200] right-0 bottom-10  object-cover cursor-pointer transform ${
                                nextModal
                                    ? "-translate-x-10 transition-transform duration-300 delay-300"
                                    : "translate-x-40"
                            }`}
                        >
                            <GrFormNextLink className="text-6xl text-white" />
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    );
};

export default NewsSlider;
