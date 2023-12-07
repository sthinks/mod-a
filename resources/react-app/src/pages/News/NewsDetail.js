import React, { useRef } from "react";
import TeamsBanner from "../../assets/Teams/ekipbanner.png";
import Line from "../../assets/cizgi.png";
import generalService from "../../service/GeneralService";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NewsDetail() {
    const [news, setNews] = useState();
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    const imageRef = useRef();
    const [bigImage, setBigImage] = useState(null);
    const getNews = async () => {
        const result = await generalService.getNew(slug, i18n.language);
        setNews(result.data);
        console.log(result);
    };
    useEffect(() => {
        getNews();
    }, [i18n.language]);
    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const nextImage = (img) => {
        const filterImage = news?.image_gallery.indexOf(img);
        if (filterImage === news?.image_gallery.length - 1)
            setBigImage(news?.image_gallery[0]);
        else setBigImage(news?.image_gallery[filterImage + 1]);
    };
    const prevImage = (img) => {
        const filterImage = news?.image_gallery.indexOf(img);
        if (filterImage === 0)
            setBigImage(news?.image_gallery[news?.image_gallery.length - 1]);
        else setBigImage(news?.image_gallery[filterImage - 1]);
    };
    return (
        <div>
            {bigImage !== null && (
                <div
                    ref={imageRef}
                    draggable="false"
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    className="w-full h-full fixed top-0 left-0 z-30 flex justify-center items-center select-none"
                >
                    <p
                        className="w-10 h-10 text-2xl rounded-full absolute right-10 top-10 bg-white text-black z-50 flex justify-center items-center cursor-pointer hover:scale-105 duration-100 delay-100"
                        onClick={() => setBigImage(null)}
                    >
                        X
                    </p>

                    <FaChevronLeft
                        className="text-white z-50 text-5xl cursor-pointer hover:scale-105 duration-150 delay-150 select-none"
                        onClick={() => prevImage(bigImage)}
                    />
                    <img
                        className="w-4/6 h-auto object-cover z-50 select-none"
                        src={bigImage}
                        alt="bigimage"
                    />
                    <FaChevronRight
                        className="text-white z-50 text-5xl cursor-pointer hover:scale-105 duration-150 delay-150 select-none"
                        onClick={() => nextImage(bigImage)}
                    />
                    <div className="absolute w-full h-full bg-black opacity-70 z-10 select-none" />
                </div>
            )}

            <div className="w-full h-auto relative mt-12 max-md:mt-8">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px]  max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover"
                    src={news?.last_image}
                    alt="ContactBanner"
                />
                {window.innerWidth > 500 ? (
                    <img
                        className="absolute  max-2xl:w-[45%] max-md:w-[20rem]  -bottom-[0.10rem]  right-0 line-index"
                        src={Line}
                        alt="Line"
                    />
                ) : (
                    <img
                        className="absolute  w-[66%]  bottom-0  right-0 line-index"
                        src={Line}
                        alt="Line"
                    />
                )}
            </div>
            <div className="w-full px-10 flex justify-between items-start max-lg:flex-col">
                <div className="w-2/4 max-lg:w-full flex justify-center flex-col item pl-40 max-lg:pl-0 max-lg:px-5">
                    <p className="text-4xl w-full max-lg:text-3xl font-light text-[#464646] my-8">
                        {news?.name}
                    </p>
                    <p
                        className="text-[#464646] opacity-60 leading-7 text-justify"
                        dangerouslySetInnerHTML={{ __html: news?.description }}
                    />
                </div>
                <div className="w-2/4 max-lg:hidden flex justify-end items-end flex-col gap-2 my-20  pl-40">
                    {news?.image_gallery.map((item, i) => (
                        <img key={i} src={item} alt={news?.name} />
                    ))}
                </div>
            </div>
            <div className="hidden max-lg:flex">
                {" "}
                <Swiper
                    className="mySwiper w-full my-10 select-none"
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {news?.image_gallery?.map((item, i) => (
                        <SwiperSlide className="h-auto select-none" key={i}>
                            <img
                                className="w-full h-full cursor-pointer select-none"
                                src={item}
                                alt="projectimage"
                                onClick={() => setBigImage(item)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewsDetail;
