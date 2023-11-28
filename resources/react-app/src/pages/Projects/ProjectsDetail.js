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
                    className="w-full h-full fixed top-0 left-0 z-30 flex justify-center items-center"
                >
                    <p
                        className="w-10 h-10 text-2xl rounded-full absolute right-10 top-10 bg-white text-black z-50 flex justify-center items-center cursor-pointer hover:scale-105 duration-100 delay-100"
                        onClick={() => setBigImage(null)}
                    >
                        X
                    </p>

                    <FaChevronLeft
                        className="text-white z-50 text-5xl cursor-pointer hover:scale-105 duration-150 delay-150"
                        onClick={() => prevImage(bigImage)}
                    />
                    <img
                        className="w-4/6 h-auto object-cover z-50"
                        src={bigImage}
                        alt="bigimage"
                    />
                    <FaChevronRight
                        className="text-white z-50 text-5xl cursor-pointer hover:scale-105 duration-150 delay-150"
                        onClick={() => nextImage(bigImage)}
                    />
                    <div className="absolute w-full h-full bg-black opacity-70 z-10" />
                </div>
            )}

            <div className="w-full h-auto relative mt-12">
                <img
                    className="relative w-full h-[500px] max-lg:h-[250px] max-md:mb-10 object-cover"
                    src={data?.banner ? data?.banner : data?.small_image}
                    alt="ContactBanner"
                />
                <img
                    className="absolute max-xl:w-[65%] -bottom-1  right-0 max-lg:hidden"
                    src={Line}
                    alt="Line"
                />
                <p
                    onClick={handleGoBack}
                    className="  max-lg:text-white max-lg:hidden  absolute bottom-0 right-20 max-xl:right-16 max-lg:right-9 max-md:right-3 text-xl max-md:text-sm cursor-pointer font-light hover:scale-105 duration-150 delay-150"
                >
                    {t("back")}
                </p>
            </div>
            {data && (
                <div className="w-full mt-12 max-xl:mt-8">
                    <p className="px-28 max-2xl:px-16 max-xl:px-10 max-md:px-2  text-4xl max-xl:text-3xl max-lg:text-2xl font-light text-[#464646] mb-8">
                        {data.name}
                    </p>
                    {paragraphs.map((item, i) =>
                        i === 0 ? (
                            <div
                                key={i}
                                className="px-28 max-2xl:px-16 max-xl:px-10 max-md:px-2  flex justify-between items-start gap-5 max-md:flex-col-reverse"
                            >
                                <p
                                    className="w-3/6 max-md:w-full py-3 text-[#464646] opacity-60 leading-7"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                                <div className="w-2/6 max-md:w-full flex flex-col justify-end items-start float-left">
                                    {data.location && (
                                        <div className="py-2 text-start flex gap-2">
                                            <p className="font-semibold text-[#4f4f4f]">
                                                {t("konum")}:
                                            </p>
                                            <p className="text-[#464646] font-light">
                                                {data.location}
                                            </p>
                                        </div>
                                    )}
                                    {data.taskmaster && (
                                        <div className="py-2 text-start flex gap-2">
                                            <p className="font-semibold text-[#4f4f4f]">
                                                {t("işveren")}:
                                            </p>
                                            <p className="text-[#464646] font-light">
                                                {data.taskmaster}
                                            </p>
                                        </div>
                                    )}
                                    {data.space && (
                                        <div className="py-2 text-start flex gap-2">
                                            <p className="font-semibold text-[#4f4f4f]">
                                                {t("yapialanı")}:
                                            </p>
                                            <p className="text-[#464646] font-light">
                                                {data.space}
                                            </p>
                                        </div>
                                    )}
                                    {data.subject && (
                                        <div className="py-2 text-start flex gap-2">
                                            <p className="font-semibold text-[#4f4f4f]">
                                                {t("konu")}:
                                            </p>
                                            <p className="text-[#464646] font-light">
                                                {data.subject}
                                            </p>
                                        </div>
                                    )}
                                    {data.year && (
                                        <div className="py-2 text-start flex gap-2">
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
                        ) : i % 2 === 0 ? (
                            <div
                                key={i}
                                className="flex justify-between items-center my-8 float-right max-md:flex-col-reverse"
                            >
                                {" "}
                                <div className="flex-1 max-md:w-full p-20 max-md:p-2 max-md:text-start flex justify-center items-center">
                                    <p
                                        className="max-md:w-full py-3 text-[#464646] opacity-60 leading-7"
                                        dangerouslySetInnerHTML={{
                                            __html: item,
                                        }}
                                    />
                                </div>
                                <div className="flex-1 max-md:w-full">
                                    {data.text_images !== null && (
                                        <img
                                            className="w-full max-lg:w-full float-right"
                                            src={data.text_images[i - 1]}
                                            alt="İmages"
                                        />
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center flex-row-reverse my-8 float-left text-right max-md:flex-col-reverse">
                                <div className="w-2/4 max-md:w-full p-20 max-md:p-2 max-md:text-start flex justify-center items-center">
                                    <p
                                        className=" max-md:w-full py-3 text-[#464646] opacity-60 leading-7"
                                        dangerouslySetInnerHTML={{
                                            __html: item,
                                        }}
                                    />
                                </div>
                                <div className="w-2/4 max-md:w-full">
                                    {data.text_images !== null && (
                                        <img
                                            className="w-full max-lg:w-full float-left"
                                            src={data.text_images[i - 1]}
                                            alt="İmages"
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}

            <Swiper
                className="mySwiper w-full my-10"
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
                    <SwiperSlide className="h-auto" key={i}>
                        <img
                            className="w-full h-full cursor-pointer"
                            src={item}
                            alt="projectimage"
                            onClick={() => setBigImage(item)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {data && (
                <div className="w-full flex justify-center items-center">
                    {data.slug === "yalova-centropark-project" ? (
                        <img src={data.last_image} alt={data.name} />
                    ) : (
                        <img src={data.last_image} alt={data.name} />
                    )}
                </div>
            )}
        </div>
    );
}

export default ProjectsDetail;
