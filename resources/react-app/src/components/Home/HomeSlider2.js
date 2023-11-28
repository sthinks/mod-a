import React, { useEffect, useState } from "react";
import generalService from "../../service/GeneralService";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HomeSlider2 = () => {
    const [slider, setSliders] = useState();
    const [list, setList] = useState(0);
    const [showImage1, setShowImage1] = useState(1);

    const handleSlideClick = (id) => {
        setShowImage1(id);
        setList(list + 1);
    };
    const getSliderslist = async () => {
        const result = await generalService.getSliders();
        setSliders(result);
    };
    useEffect(() => {
        getSliderslist();
    }, []);
    return (
        slider && (
            <Swiper
                pagination={true}
                className="mySwiper w-full mb-20 mt-12 max-md:mb-10"
            >
                {slider.map((item, i) => (
                    <SwiperSlide className="w-full" key={i}>
                        <img className="w-full" src={item.image} alt="Slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    );
};

export default HomeSlider2;
