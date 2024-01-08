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
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const [news, setNews] = useState([]);
    const [selectNew, setSelectNew] = useState(0);
    const [activeSlider, setActiveSlider] = useState(0);
    const [hoverImg, setHoverImg] = useState();
    const [projectList, setProjectList] = useState();
    const compareFunction = (a, b) => {
        // "order" özelliğine göre azalan sıralama
        return a.home_order - b.home_order;
    };
    const getProjects = async () => {
        // Orijinal veriyi al
        const result = await generalService.getProjects(i18n.language);

        // Orijinal verinin bir kopyasını oluştur
        const newProjectList = [...result];

        // Kopyayı sırala
        const newProjectListSorted = newProjectList.sort(compareFunction);

        // Sıralanmış kopyayı kullanabilirsin
        console.log(newProjectListSorted);

        // Orijinal veriyi kullanabilirsin
        console.log(result);
        console.log("selam");

        // State'i güncelle
        setProjectList(newProjectListSorted);
        setProject(result);
    };

    const getNews = async () => {
        const result = await generalService.getNews(i18n.language);
        setNews(result);
    };
    useEffect(() => {
        getProjects();
        getNews();
    }, [i18n.language]);
    const handleSlideChange = () => {
        // Aktif slide'ın index numarasını al
        const currentIndex = swiperRef.current.swiper.activeIndex;
        setActiveSlider(currentIndex);
    };
    const extractTextFromHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };
    const truncateText = (textt, maxLength) => {
        const text = extractTextFromHTML(textt);
        const words = text.split(" ");
        const truncatedWords = words.slice(0, maxLength);
        const truncatedText = truncatedWords.join(" ");
        return truncatedText + "...";
    };
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);
    const handlePrevNew = () => {
        if (selectNew - 1 === -1) {
            setSelectNew(news?.length - 1);
        } else setSelectNew(selectNew - 1);
    };

    const handleNextNew = () => {
        if (news?.length - 1 === selectNew) {
            setSelectNew(0);
        } else setSelectNew(selectNew + 1);
    };

    return (
        <div className="">
            {project.length !== 0 && <HomeSlider data={project} />}
            <div className="w-full flex justify-center  flex-col items-center">
                <div className="w-full flex justify-between items-center gap-5 mb-10  max-md:flex-col-reverse px-5">
                    <div className="w-full flex justify-between max-sm:flex-col items-start max-lg:flex-col">
                        <div className="w-2/4 max-lg:w-full max-md:w-full max-lg:hidden font-normal max-lg:justify-center max-lg:items-start text-justify max-md:mt-2 flex flex-col justify-center items-center">
                            <p className="text-4xl text-[#535353] w-[500px] max-lg:max-w-none opacity-70 font-semibold ">
                                MOD-A
                            </p>{" "}
                        </div>
                        <div className="w-2/4 max-lg:w-full max-md:w-full font-normal text-start max-md:mt-2 flex flex-col justify-center items-center ">
                            <p className="opacity-70 font-normal  max-w-[500px] max-lg:max-w-none max-md:text-justify ">
                                <p className="text-4xl text-[#535353]  opacity-70 font-semibold max-lg:block hidden max-lg:my-10 ">
                                    MOD-A
                                </p>{" "}
                                <p className="text-[#464646] opacity-80 leading-7 text-justify">
                                    <span className="font-semibold">MOD A</span>
                                    {t("home_right_text")}{" "}
                                </p>{" "}
                                <a
                                    className="text-with-underline font-normal pt-2 hover:text-black duration-150 delay-15 text-[#464646] opacity-80 leading-7 text-justify"
                                    href={`/about-us`}
                                >
                                    {t("devami")}
                                </a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end items-center my-5 gap-6 mt-20 pr-10 font-semibold max-md:hidden select-none">
                    <div className="custom-next cursor-pointer select-none">
                        {/* TfiAngleLeft içeriğini buraya ekleyin */}
                        <TfiAngleLeft
                            className="text-3xl cursor-pointer"
                            onClick={handlePrev}
                        />
                    </div>
                    <div className="custom-prev cursor-pointer">
                        {/* İkinci ok içeriğini buraya ekleyin */}
                        <TfiAngleRight
                            className="text-3xl cursor-pointer"
                            onClick={handleNext}
                        />
                    </div>
                    <p className="text-4xl text-[#535353] opacity-70">
                        {t("header_projects")}
                    </p>
                </div>
                {projectList && (
                    <div className=" w-full flex justify-between items-center gap-5 mb-10  max-lg:flex-col-reverse px-5">
                        <div className="w-2/4 max-lg:w-full max-lg:mt-2 flex flex-col justify-center items-center">
                            <div>
                                <div
                                    className="max-w-[500px] max-lg:max-w-none item-div"
                                    dangerouslySetInnerHTML={{
                                        __html: truncateText(
                                            projectList[activeSlider]
                                                ?.description,
                                            37
                                        ),
                                    }}
                                />

                                <a
                                    className="text-with-underline pt-2 hover:text-black duration-150 font-normal delay-150 text-[#464646] opacity-60 leading-7 text-justify"
                                    href={`/projects/${projectList[activeSlider]?.slug}`}
                                    target="blank"
                                >
                                    {t("devami")}
                                </a>
                            </div>
                        </div>
                        <div className="relative w-2/4  max-lg:w-full max-md:h-auto max-md:w-full">
                            <div className=" justify-end items-center my-5  max-md:my-2 gap-6 max-md:gap-3  font-semibold hidden max-md:flex">
                                <div className="custom-next cursor-pointer">
                                    {/* TfiAngleLeft içeriğini buraya ekleyin */}
                                    <TfiAngleLeft
                                        className="text-3xl max-md:text-xl cursor-pointer"
                                        onClick={handlePrev}
                                    />
                                </div>
                                <div className="custom-prev cursor-pointer">
                                    {/* İkinci ok içeriğini buraya ekleyin */}
                                    <TfiAngleRight
                                        className="text-3xl max-md:text-xl cursor-pointer"
                                        onClick={handleNext}
                                    />
                                </div>
                                <p className="text-4xl max-md:text-2xl text-[#535353] opacity-70">
                                    {t("header_projects")}
                                </p>
                            </div>
                            <Swiper
                                navigation={{
                                    nextEl: ".custom-next",
                                    prevEl: ".custom-prev",
                                }}
                                className="mySwiper select-none"
                                ref={swiperRef}
                                onSlideChange={handleSlideChange}
                            >
                                {projectList.map((item, i) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="relative w-full h-auto flex justify-center items-center cursor-pointer"
                                        onClick={() =>
                                            navigate(`/projects/${item.slug}`)
                                        }
                                    >
                                        <img
                                            className="w-full h-full object-cover hover:scale-105 delay-150 duration-300"
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
                {news !== null && (
                    <>
                        {" "}
                        <div className="w-full flex justify-start pl-10  items-center my-5 gap-6 mt-5  font-semibold max-lg:hidden select-none">
                            <p className="text-4xl text-[#535353] opacity-70">
                                {t("haber")}
                            </p>
                            <div className="custom-next cursor-pointer select-none">
                                {/* TfiAngleLeft içeriğini buraya ekleyin */}
                                <TfiAngleLeft
                                    className="text-3xl cursor-pointer select-none"
                                    onClick={handlePrevNew}
                                />
                            </div>
                            <div className="custom-prev cursor-pointer select-none">
                                {/* İkinci ok içeriğini buraya ekleyin */}
                                <TfiAngleRight
                                    className="text-3xl cursor-pointer select-none"
                                    onClick={handleNextNew}
                                />
                            </div>
                        </div>
                        <div className=" w-full flex justify-between items-center gap-5 mb-10  max-lg:flex-col px-5 ">
                            <div className=" justify-end items-center my-5 max-lg:my-2 gap-6 max-lg:gap-3 font-semibold hidden max-lg:flex max-lg:w-full max-lg:justify-start ">
                                <div className="custom-next cursor-pointer">
                                    {/* TfiAngleLeft içeriğini buraya ekleyin */}
                                    <TfiAngleLeft
                                        className="text-3xl max-md:text-xl cursor-pointer"
                                        onClick={handlePrevNew}
                                    />
                                </div>
                                <div className="custom-prev cursor-pointer">
                                    {/* İkinci ok içeriğini buraya ekleyin */}
                                    <TfiAngleRight
                                        className="text-3xl max-md:text-xl cursor-pointer"
                                        onClick={handleNextNew}
                                    />
                                </div>
                                <p className="text-4xl max-md:text-2xl text-[#535353] opacity-70">
                                    {t("haber")}
                                </p>
                            </div>
                            <div
                                className="relative w-2/4 max-md:h-auto max-lg:w-full group select-none"
                                onMouseEnter={() => setHoverImg(selectNew)}
                                onMouseLeave={() => setHoverImg(-1)}
                            >
                                <div
                                    className="relative overflow-hidden flex justify-center items-center select-none cursor-pointer"
                                    onClick={() =>
                                        navigate(
                                            `/news/${news[selectNew]?.slug}`
                                        )
                                    }
                                >
                                    <img
                                        className="w-full  h-full object-cover cursor-pointer transition-transform transform-gpu group-hover:scale-105 duration-500 delay-200 select-none"
                                        src={news[selectNew]?.image}
                                        onClick={() =>
                                            navigate(
                                                `/news/${news[selectNew]?.slug}`
                                            )
                                        }
                                        alt={news[selectNew]?.name}
                                    />
                                    <div className="absolute inset-0 cursor-pointer bg-black opacity-40 transition-opacity duration-300 delay-300 ease-in-out group-hover:opacity-0 select-none"></div>
                                    <div className="absolute cursor-pointer w-full z-40 h-20 bg-white opacity-10 transition-opacity duration-300 delay-500 ease-in-out group-hover:opacity-0 select-none"></div>
                                    <p className="absolute cursor-pointer w-full text-center z-50 text-2xl max-xl:text-xl max-md:text-base max-md:font-light max-md:px-4  font-semibold text-white transition-opacity duration-300 ease-in-out group-hover:opacity-0 select-none px-3">
                                        {news[selectNew]?.name}
                                    </p>
                                </div>
                            </div>

                            <div className="w-2/4 max-lg:w-full  text-justify max-md:mt-2  flex flex-col justify-center items-center">
                                <div>
                                    <div
                                        className="max-w-[500px] max-lg:max-w-none item-div cursor-default"
                                        dangerouslySetInnerHTML={{
                                            __html: truncateText(
                                                news[selectNew]?.description,
                                                40
                                            ),
                                        }}
                                    />
                                    <a
                                        className="text-with-underline pt-2   hover:text-black duration-150 delay-150 text-[#464646] opacity-60 leading-7 text-justify "
                                        href={`/news/${news[selectNew]?.slug}`}
                                        target="blank"
                                    >
                                        {t("devami")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="w-full flex justify-between items-center gap-5 mb-10 mt-12 max-lg:mt-5  max-lg:flex-col-reverse px-5">
                <div className="w-2/4 max-lg:w-full  text-justify max-md:mt-2  flex flex-col justify-center items-center">
                    <div className="max-w-[500px] max-lg:max-w-none item-div cursor-default max-lg:w-full">
                        <p className="text-xl font-semibold">
                            {t("contact_title")}
                        </p>
                        <div className="mt-4 text-[#464646] opacity-80 leading-7 text-justify">
                            <p className="my-3">
                                Varyap Medidian A BLOK Grand Tower D:NO:8 <br />{" "}
                                ATAŞEHİR / İSTANBUL{" "}
                            </p>
                            <a
                                className="text-with-underline font-normal pt-2 hover:text-black duration-150 delay-15 text-[#464646] opacity-80 leading-7 text-justify"
                                href={`/contact`}
                            >
                                {t("devami")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 max-lg:w-full  text-justify max-md:mt-2  flex flex-col justify-center items-center relative">
                    <iframe
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="z-40"
                        title="Mod-a Harita"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1032526272784!2d29.1029904!3d41.00111319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9bd9432774b%3A0xa02c34b82e4ebcf2!2sMOD%20ARCHITECTS!5e0!3m2!1str!2str!4v1702023332419!5m2!1str!2str"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={
                            hover
                                ? "hidden opacity-0 delay-100 duration-300"
                                : "absolute w-full h-full bg-black opacity-50 top-0 left-0 z-50 delay-100 duration-300 cursor-pointer"
                        }
                        style={{
                            transition: "opacity 0.0s ease",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
