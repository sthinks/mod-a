import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsBanner from "../../assets/News/newsbanner.jpg";
import { useTranslation } from "react-i18next";
import generalService from "../../service/GeneralService";
import Line from "../../assets/cizgi.png";

function News() {
    const [teams, setTeams] = useState([]);

    const [hoverImg, setHoverImg] = useState();

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    const getAllNews = async () => {
        const result = await generalService.getNews(i18n.language);
        setTeams(result);
    };
    useEffect(() => {
        getAllNews();
    }, [i18n.language]);
    const handleMouseEnter = (index) => {
        setHoverImg(index);
    };

    const handleMouseLeave = () => {
        setHoverImg(-1);
    };

    return (
        <div>
            <div className="w-full h-auto relative mt-12 max-md:mt-8 select-none">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px] max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover select-none"
                    src={NewsBanner}
                    alt="NewsBanner"
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

            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10  mt-12 max-md:px-2">
                <p className="text-4xl max-xl:text-3xl max-md:text-2xl  font-medium opacity-80 text-[#535353] mb-5">
                    {t("header_news")}
                </p>
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
                    {teams.map((item, i) => (
                        <div
                            onClick={() => navigate(item.slug)}
                            key={i}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                            className="relative cursor-pointer  h-auto  flex justify-center items-center flex-wrap overflow-hidden"
                        >
                            <div
                                className={`w-full grayscale-transition h-full scale-transition ${
                                    hoverImg === i ? "" : "grayscale scale"
                                }`}
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div
                                className={`absolute z-50 w-full h-[3.25rem] max-xl:h-18 max-md:h-14 bg-black opacity-50  ${
                                    hoverImg === i
                                        ? "block duration-150 delay-150"
                                        : "hidden"
                                }`}
                            />
                            <div
                                className={`absolute z-50 w-full  text-center text-white text-base max-md:text-sm font-me  ${
                                    hoverImg === i
                                        ? "block duration-150 delay-150"
                                        : "hidden"
                                }`}
                            >
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
