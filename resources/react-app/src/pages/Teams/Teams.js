import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generalService from "../../service/GeneralService";
import aboutusbg from "../../assets/Teams/teamBanner.png";
import TeamsBanner from "../../assets/Teams/ekipbanner.png";
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

    return (
        <div>
            <div className="w-full h-auto relative mt-12 max-md:mt-8">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px]  max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover"
                    src={TeamsBanner}
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

            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10  mt-12 max-md:px-2">
                <p className="text-4xl max-xl:text-3xl max-md:text-2xl  font-medium opacity-80 text-[#535353] mb-5">
                    {t("header_teams")}
                </p>
                <div className="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4">
                    {teams.map(
                        (item, i) =>
                            i < 2 && (
                                <div
                                    key={i}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full relative cursor-pointer  flex justify-center items-center flex-col overflow-hidden"
                                >
                                    <div className="w-full h-full grayscale-transition scale-transition">
                                        <img
                                            className={`w-full grayscale-transition h-full scale-transition ${
                                                hoverImg === i
                                                    ? ""
                                                    : "grayscale scale"
                                            }`}
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="w-full relative mt-5 text-start text-[#535353] opacity-90 text-base max-md:text-sm font-bold">
                                        {item.name} <br />
                                        <p className="max-md:text-[0.9rem] font-light">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                    {teams.map(
                        (item, i) =>
                            i >= 2 && (
                                <div
                                    key={i}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-full relative cursor-pointer  flex justify-center items-center flex-col overflow-hidden"
                                >
                                    <div className="w-full h-full grayscale-transition scale-transition">
                                        <img
                                            className={`w-full grayscale-transition h-full scale-transition ${
                                                hoverImg === i
                                                    ? ""
                                                    : "grayscale scale"
                                            }`}
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="w-full relative mt-5 text-start text-[#535353] opacity-90 text-base max-md:text-sm font-bold">
                                        {item.name} <br />
                                        <p className="max-md:text-[0.9rem] font-light">
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
