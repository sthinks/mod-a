import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsBanner from "../../assets/Projects/projectbanner.png";
import { useTranslation } from "react-i18next";
import generalService from "../../service/GeneralService";
import Line from "../../assets/cizgi.png";

function Projects() {
    const [teams, setTeams] = useState([]);

    const [hoverImg, setHoverImg] = useState();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    const { t, i18n } = useTranslation();
    const getAllTeams = async () => {
        const result = await generalService.getProjects(i18n.language);
        setTeams(result);
    };
    useEffect(() => {
        getAllTeams();
    }, [i18n.language]);
    const handleMouseEnter = (index) => {
        setHoverImg(index);
    };

    const handleMouseLeave = () => {
        setHoverImg(-1);
    };

    return (
        <div>
            <div className="w-full h-auto relative mt-12 ">
                <img
                    className="relative w-full h-[500px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px]  max-md:mb-10 object-cover"
                    src={ProjectsBanner}
                    alt="ContactBanner"
                />
                <img
                    className="absolute  max-2xl:w-[45%] max-md:w-[20rem]  -bottom-1  right-0 line-index"
                    src={Line}
                    alt="Line"
                />
                <p
                    onClick={handleGoBack}
                    className="  max-lg:text-white header-line-index  absolute bottom-0 right-20 max-xl:right-16 max-lg:right-9 max-md:right-3 text-xl max-md:text-sm cursor-pointer font-light hover:scale-105 duration-150 delay-150"
                >
                    {t("back")}
                </p>
            </div>

            <div className="w-full px-28 max-2xl:px-16 max-xl:px-10 max-md:px-2 mt-12">
                <p className="text-4xl max-xl:text-3xl max-md:text-2xl  font-medium opacity-80 text-[#535353] mb-5">
                    {t("header_projects")}
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
                                className={`w-full h-auto grayscale-transition scale-transition ${
                                    hoverImg === i ? "" : "grayscale scale"
                                }`}
                            >
                                <img
                                    className="w-full h-[200px] max-lg:h-[125px] object-cover"
                                    src={item.small_image}
                                    alt={item.name}
                                />
                            </div>
                            <div className="absolute z-50 w-full h-[3.25rem] max-xl:h-18 max-md:h-14 bg-black opacity-50 bottom-0" />
                            <div className="absolute z-50 w-full bottom-2 text-center text-white text-base max-md:text-sm font-normal">
                                {item.name} <br />{" "}
                                <p className="text-sm opacity-90 max-md:text-[0.5rem]">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
