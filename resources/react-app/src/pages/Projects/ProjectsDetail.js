import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import generalService from "../../service/GeneralService";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Line from "../../assets/cizgi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function ProjectsDetail() {
    const imageRef = useRef();
    const [bigImage, setBigImage] = useState(null);
    const [data, setData] = useState(null);
    const [paragraphs, setParagraphs] = useState([]);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { slug } = useParams();

    const handleGoBack = () => {
        navigate(-1);
    };
    const getProject = async () => {
        const result = await generalService.getProject(slug, i18n.language);
        console.log(result.data.description);
        extractParagraphs(result.data.description);
        setData(result.data);
    };
    useEffect(() => {
        getProject();
        window.scrollTo(0, 0);
    }, [i18n.language]);

    const extractParagraphs = (datam) => {
        const htmlString = datam;

        // Create a div element to parse the HTML
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;

        // Get all <p> elements
        const paragraphs = tempDiv.getElementsByTagName("p");

        // Create an array to store the content of each <p> element
        const contentArray = [];

        // Iterate over each <p> element and store its content in the array
        for (let i = 0; i < paragraphs.length; i++) {
            // Create a div for each paragraph to parse its HTML content
            const paragraphDiv = document.createElement("div");
            paragraphDiv.innerHTML = paragraphs[i].innerHTML;

            // Replace <strong> tags with the corresponding text wrapped in <strong> tag
            const strongElements = paragraphDiv.getElementsByTagName("strong");
            for (let j = 0; j < strongElements.length; j++) {
                const strongText = strongElements[j].textContent.trim();
                const strongTag = document.createElement("strong");
                strongTag.textContent = strongText;
                strongElements[j].parentNode.replaceChild(
                    strongTag,
                    strongElements[j]
                );
            }

            // Store the modified HTML content in the array
            contentArray.push(paragraphDiv.innerHTML);
        }

        // Set the extracted paragraphs in the state
        setParagraphs(contentArray);
    };

    const nextImage = (img) => {
        const filterImage = data?.images.indexOf(img);
        if (filterImage === data?.images.length - 1)
            setBigImage(data?.images[0]);
        else setBigImage(data?.images[filterImage + 1]);
    };
    const prevImage = (img) => {
        const filterImage = data?.images.indexOf(img);
        if (filterImage === 0)
            setBigImage(data?.images[data?.images.length - 1]);
        else setBigImage(data?.images[filterImage - 1]);
    };
    useEffect(() => {
        const closeDropdown = (e) => {
            if (
                e.target.className ===
                "absolute w-full h-full bg-black opacity-70 z-10"
            ) {
                setBigImage(null);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);
    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
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

            <div className="w-full h-auto relative mt-7 max-md:mt-8 select-none">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px] max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover select-none"
                    src={data?.banner ? data?.banner : data?.small_image}
                    alt="ContactBanner"
                />
                {window.innerWidth > 500 ? (
                    <img
                        className="absolute  max-2xl:w-[45%] max-md:w-[20rem]  -bottom-[0.10rem]  right-0 line-index select-none"
                        src={Line}
                        alt="Line"
                    />
                ) : (
                    <img
                        className="absolute  w-[66%]  bottom-0  right-0 line-index select-none"
                        src={Line}
                        alt="Line"
                    />
                )}
            </div>
            {data && (
                <div className="w-full mt-12 max-xl:mt-8">
                    {paragraphs.map((item, i) =>
                        i === 0 ? (
                            <div
                                key={i}
                                className="px-5 flex justify-between items-start gap-5 max-lg:flex-col"
                            >
                                <div className="w-3/6 max-lg:w-full flex flex-col justify-center items-center max-lg:items-start">
                                    <div className="max-w-[500px] max-lg:max-w-none">
                                        <p className="text-4xl w-full max-lg:text-3xl font-light text-[#464646] mb-8">
                                            {data.name}
                                        </p>
                                        <p
                                            className="w-full text-[#464646] opacity-60 leading-7 text-justify"
                                            dangerouslySetInnerHTML={{
                                                __html: item,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="w-3/6 max-lg:w-full flex flex-col justify-center items-center">
                                    <div className="max-lg:w-full">
                                        {data.location && (
                                            <div className="py-1 text-start flex gap-2">
                                                <p className="font-semibold text-[#4f4f4f]">
                                                    {t("konum")}:
                                                </p>
                                                <p className="text-[#464646] font-light">
                                                    {data.location}
                                                </p>
                                            </div>
                                        )}
                                        {data.taskmaster && (
                                            <div className="py-1 text-start flex gap-2">
                                                <p className="font-semibold text-[#4f4f4f]">
                                                    {t("işveren")}:
                                                </p>
                                                <p className="text-[#464646] font-light">
                                                    {data.taskmaster}
                                                </p>
                                            </div>
                                        )}
                                        {data.space && (
                                            <div className="py-1 text-start flex gap-2">
                                                <p className="font-semibold text-[#4f4f4f]">
                                                    {t("yapialanı")}:
                                                </p>
                                                <p className="text-[#464646] font-light">
                                                    {data.space}
                                                </p>
                                            </div>
                                        )}
                                        {data.subject && (
                                            <div className="py-1 text-start flex gap-2">
                                                <p className="font-semibold text-[#4f4f4f]">
                                                    {t("konu")}:
                                                </p>
                                                <p className="text-[#464646] font-light">
                                                    {data.subject}
                                                </p>
                                            </div>
                                        )}
                                        {data.year && (
                                            <div className="py-1 text-start flex gap-2">
                                                <p className="font-semibold text-[#4f4f4f]">
                                                    {t("yil")}:
                                                </p>
                                                <p className="text-[#464646] font-light">
                                                    {data.year}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : i % 2 === 0 ? (
                            <>
                                {" "}
                                <div
                                    key={i}
                                    className={
                                        data.slug === "rams-city-golden-horn"
                                            ? "-full flex justify-between items-stretch my-8 float-right max-md:flex-col-reverse px-5 gap-5 max-lg:flex-col max-md:px-0"
                                            : "w-full flex justify-between items-stretch my-8 float-right max-md:flex-col-reverse px-5 gap-5 max-lg:flex-col-reverse max-md:px-0"
                                    }
                                >
                                    {" "}
                                    <div
                                        className={
                                            data.slug ===
                                            "rams-city-golden-horn"
                                                ? "w-2/4 max-lg:w-full flex flex-col justify-between items-center max-lg:items-start max-md:px-5"
                                                : "w-2/4 max-lg:w-full flex flex-col justify-center items-center max-lg:items-start max-md:px-5"
                                        }
                                    >
                                        {data.slug ===
                                        "rams-city-golden-horn" ? (
                                            <div className="w-full h-full flex justify-center items-center">
                                                {" "}
                                                <p
                                                    className={
                                                        "max-md:w-full max-w-[500px] max-lg:max-w-none py-3 text-[#464646] opacity-60 leading-7 text-justify"
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: item,
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <p
                                                className={
                                                    "max-md:w-full max-w-[500px] max-lg:max-w-none py-3 text-[#464646] opacity-60 leading-7 text-justify"
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: item,
                                                }}
                                            />
                                        )}

                                        {data.slug ===
                                            "rams-city-golden-horn" && (
                                            <img
                                                className="w-full max-lg:w-full float-right"
                                                src={data.text_images[i]}
                                                alt="İmages"
                                            />
                                        )}
                                    </div>
                                    <div className="w-2/4 max-lg:w-full flex flex-col px-5">
                                        {data.text_images !== null && (
                                            <img
                                                className="w-full max-lg:w-full float-right"
                                                src={data.text_images[i - 1]}
                                                alt="İmages"
                                            />
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {" "}
                                <div className="w-full flex justify-between items-center flex-row-reverse my-8 float-left text-right max-md:flex-col-reverse px-5 gap-5 max-lg:flex-col-reverse max-md:px-0">
                                    <div className="w-2/4 max-lg:w-full font-normal text-justify max-lg:mt-2 flex flex-col justify-center items-center max-md:px-5">
                                        <p
                                            className="max-md:w-full py-3 max-w-[500px] max-lg:max-w-none text-[#464646] opacity-60 leading-7 text-justify"
                                            dangerouslySetInnerHTML={{
                                                __html: item,
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={
                                            data.slug === "mali-hotel"
                                                ? "w-3/4 max-lg:w-full"
                                                : "w-2/4 max-lg:w-full"
                                        }
                                    >
                                        {data.text_images !== null && (
                                            <img
                                                className="max-lg:w-full float-left object-cover w-full"
                                                src={data.text_images[i - 1]}
                                                alt="Images"
                                            />
                                        )}
                                    </div>
                                </div>
                                {data.slug === "rams-city-golden-horn" &&
                                    i === 1 && (
                                        <div className="w-full flex justify-center items-center mt-4">
                                            <img
                                                className="w-full h-full"
                                                src={data.last_image}
                                                alt={data.name}
                                            />
                                        </div>
                                    )}
                            </>
                        )
                    )}
                </div>
            )}

            {data && (
                <div
                    className={
                        data.slug === "rams-city-golden-horn"
                            ? "hidden"
                            : "w-full flex justify-center items-center mt-4"
                    }
                >
                    {data.slug === "yalova-centropark-project" ? (
                        <img
                            className={
                                data.last_image === null
                                    ? "hidden"
                                    : "w-full h-full"
                            }
                            src={data.last_image}
                            alt={data.name}
                        />
                    ) : (
                        <img
                            className={
                                data.slug === "rams-city-golden-horn" ||
                                data.last_image === null
                                    ? "hidden"
                                    : "w-full h-full"
                            }
                            src={data.last_image}
                            alt={data.name}
                        />
                    )}
                </div>
            )}
            <Swiper
                className="mySwiper w-full my-10 select-none h-[300px]"
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
                {data?.images?.map((item, i) => (
                    <SwiperSlide className="h-auto select-none mt-2" key={i}>
                        <img
                            className="w-full h-full cursor-pointer select-none object-cover"
                            src={item}
                            alt="projectimage"
                            onClick={() => setBigImage(item)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProjectsDetail;
