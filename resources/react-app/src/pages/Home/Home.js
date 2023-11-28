import React, { useCallback, useEffect, useRef, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import generalService from "../../service/GeneralService";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
    const swiperRef = useRef(null);
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const [activeSlider, setActiveSlider] = useState(0);
    const [hoverImg, setHoverImg] = useState();

    const getProjects = async () => {
        const result = await generalService.getProjects(i18n.language);
        setProject(result);
    };
    useEffect(() => {
        getProjects();
    }, [i18n.language]);
    const handleSlideChange = () => {
        // Aktif slide'ın index numarasını al
        const currentIndex = swiperRef.current.swiper.activeIndex;
        setActiveSlider(currentIndex);
    };
    function truncateText(text, maxLength) {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="">
            {project.length !== 0 && <HomeSlider data={project} />}
            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10 max-md:px-2">
                <div className="w-full flex justify-between max-sm:flex-col items-start">
                    <div className="max-w-4xl max-2xl:w-6/12 max-sm:w-full flex flex-col justify-between items-start gap-10 font-light text-base">
                        <p className="text-6xl font-bold opacity-50">MOD-A</p>
                    </div>
                    <div className="max-w-4xl max-2xl:w-5/12 max-sm:w-full flex flex-col justify-between text-right items-start gap-10 font-light text-base">
                        <p className="opacity-50 font-normal">
                            <b className="font-bold">MOD A</b>
                            {t("home_right_text")}
                        </p>
                    </div>
                </div>
                {project && (
                    <div className=" w-full flex justify-between items-start gap-5 mb-10 mt-20  max-md:flex-col-reverse">
                        <div className="w-2/4 max-md:w-full  font-light text-base mt-20 max-md:mt-2">
                            <p
                                className="opacity-50 font-normal"
                                dangerouslySetInnerHTML={{
                                    __html: truncateText(
                                        project[activeSlider]?.description,
                                        600
                                    ),
                                }}
                            />
                            <a
                                className="text-with-underline pt-2 hover:text-black duration-150 delay-150"
                                href={`/projects/${project[activeSlider]?.slug}`}
                                target="blank"
                            >
                                {t("devami")}
                            </a>
                        </div>
                        <div className="relative w-2/6  max-md:h-auto max-md:w-full">
                            <div className="flex justify-end items-center my-5 gap-6 text-2lx font-semibold">
                                <div className="custom-next">
                                    {/* TfiAngleLeft içeriğini buraya ekleyin */}
                                    <TfiAngleLeft
                                        className="text-3xl"
                                        onClick={handlePrev}
                                    />
                                </div>
                                <div className="custom-prev">
                                    {/* İkinci ok içeriğini buraya ekleyin */}
                                    <TfiAngleRight
                                        className="text-3xl"
                                        onClick={handleNext}
                                    />
                                </div>
                                <p className="text-4xl text-[#535353] opacity-80">
                                    {t("header_projects")}
                                </p>
                            </div>
                            <Swiper
                                navigation={{
                                    nextEl: ".custom-next",
                                    prevEl: ".custom-prev",
                                }}
                                className="mySwiper"
                                ref={swiperRef}
                                onSlideChange={handleSlideChange}
                            >
                                {project.map((item, i) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="relative w-full h-auto flex justify-center items-center cursor-pointer"
                                        onClick={() =>
                                            navigate(`/projects/${item.slug}`)
                                        }
                                    >
                                        <img
                                            className="w-full h-full object-cover hover:scale-105 delay-150 duration-200"
                                            src={item.small_image}
                                            alt={item.name}
                                        />
                                        <p className="absolute bottom-3 z-50  text-white">
                                            {item.name}
                                        </p>
                                        <div className="absolute bottom-0 right-0 w-full h-10 bg-black opacity-60 z-10" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}
                <div className="w-full py-20">
                    <p className="text-4xl text-[#535353] opacity-80">
                        {t("haber")}
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center">
                        <div className="relative w-[49%] max-md:w-full h-96 max-md:h-52 my-2 ">
                            <img
                                className="w-full h-full object-cover cursor-pointer"
                                src={project[1]?.small_image}
                                alt="ss"
                            />
                            <div className="absolute w-full h-10  bg-black opacity-50 z-20 bottom-0 left-0" />
                            <p className="absolute bottom-1 left-4 text-white z-50">
                                {project[1]?.name}
                            </p>
                        </div>
                        <div className="relative w-[49%] max-md:w-full h-96 max-md:h-52 my-2">
                            <img
                                className="w-full h-full object-cover cursor-pointer"
                                src={project[2]?.small_image}
                                alt="ss"
                            />
                            <div className="absolute w-full h-10  bg-black opacity-50 z-20 bottom-0 left-0" />
                            <p className="absolute bottom-1 left-4 text-white z-50">
                                {project[2]?.name}
                            </p>
                        </div>{" "}
                        <div className="relative w-[49%] max-md:w-full h-96 max-md:h-52 my-2">
                            <img
                                className="w-full h-full object-cover cursor-pointer"
                                src={project[3]?.small_image}
                                alt="ss"
                            />
                            <div className="absolute w-full h-10  bg-black opacity-50 z-20 bottom-0 left-0" />
                            <p className="absolute bottom-1 left-4 text-white z-50">
                                {project[3]?.name}
                            </p>
                        </div>{" "}
                        <div className="relative w-[49%] max-md:w-full h-96 max-md:h-52 my-2">
                            <img
                                className="w-full h-full object-cover cursor-pointer"
                                src={project[4]?.small_image}
                                alt="ss"
                            />
                            <div className="absolute w-full h-10  bg-black opacity-50 z-20 bottom-0 left-0" />
                            <p className="absolute bottom-1 left-4 text-white z-50">
                                {project[4]?.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
