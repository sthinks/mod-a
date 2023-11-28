import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generalService from "../../service/GeneralService";
import aboutusbg from "../../assets/Teams/teamBanner.png";
import AboutusBanner from "../../assets/Teams/ekipbanner.png";
import { useTranslation } from "react-i18next";
import Line from "../../assets/cizgi.png";

function Teams() {
    const { t, i18n } = useTranslation();

    const [teams, setTeams] = useState([]);
    const [hoverImg, setHoverImg] = useState();

    const getAllTeams = async () => {
        const result = await generalService.getTeams(i18n.language);
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
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className="w-full h-auto relative mt-12">
                <img
                    className="relative w-full h-[500px] max-lg:h-[250px] max-md:mb-10 object-cover"
                    src={AboutusBanner}
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

            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10  mt-12 max-md:px-2">
                <p className="text-4xl max-xl:text-3xl max-md:text-2xl  font-medium opacity-80 text-[#535353] mb-5">
                    {t("header_teams")}
                </p>
                <div className="flex justify-start items-center gap-4 max-md:flex-wrap mt-4">
                    {teams.map(
                        (item, i) =>
                            i < 2 && (
                                <div
                                    key={i}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative  h-[600px] max-lg:h-[500px] max-md:h-[350px] max-md:w-[45%] cursor-pointer  flex flex-col justify-between items-start  overflow-hidden"
                                >
                                    <div
                                        className={`w-96 max-2xl:w-72 max-xl:w-56   h-5/6  object-center grayscale-transition scale-transition ${
                                            hoverImg === i
                                                ? ""
                                                : "grayscale scale"
                                        }`}
                                    >
                                        <img
                                            className="w-full h-full object-cover text-center team-image"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="w-full relative h-1/6  mt-5   text-start text-[#535353] opacity-90 text-base max-md:text-sm font-bold">
                                        {item.name} <br />{" "}
                                        <p className="  max-md:text-[0.5rem] font-light">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
                <div className="flex justify-start items-center  gap-4 max-md:flex-wrap mt-4">
                    {teams.map(
                        (item, i) =>
                            i >= 2 && (
                                <div
                                    key={i}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative  h-[600px] max-lg:h-[500px] max-md:h-[350px] max-md:w-[45%] cursor-pointer  flex flex-col justify-between items-start  overflow-hidden"
                                >
                                    <div
                                        className={`w-96 max-2xl:w-72 max-xl:w-56   h-5/6  object-center grayscale-transition scale-transition ${
                                            hoverImg === i
                                                ? ""
                                                : "grayscale scale"
                                        }`}
                                    >
                                        <img
                                            className="w-full h-full object-cover text-center team-image"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="w-full relative h-1/6  mt-5   text-start text-[#535353] opacity-90 text-base max-md:text-sm font-bold">
                                        {item.name} <br />{" "}
                                        <p className="  max-md:text-[0.5rem] font-light">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <img className="w-full h-full" src={aboutusbg} alt="aboutus" />
        </div>
    );
}

export default Teams;
