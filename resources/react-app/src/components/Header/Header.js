import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Header/modalogo.png";
import LogoBlack from "../../assets/Header/modalogo.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Header() {
    const [navItem, setNavItem] = useState(" ");
    const [list, setList] = useState();
    const { t, i18n } = useTranslation();
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);
    const navigation = [
        { name: t("header_aboutus"), href: "/about-us" },
        { name: t("header_projects"), href: "/projects" },
        { name: t("header_teams"), href: "/teams" },
        { name: t("header_news"), href: "/news" },

        { name: t("contact_title"), href: "/contact" },
    ];
    const navigate = useNavigate();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    return (
        <Disclosure
            as="nav"
            className="relative top-0 z-50 w-full max-sm:relative header-line-index "
        >
            {({ open, close }) => (
                <>
                    <div className="px-36 max-2xl:px-20 max-xl:px-10 max-lg:px-6 max-md:px-4">
                        <div className="relative flex sm:h-20 h-16 items-center justify-between">
                            <div className="absolute inset-y-0 flex-row-reverse left-0 flex items-center md:hidden justify-between w-full max-sm:top-7">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex  items-center justify-center p-2 text-slate-700 ring-2 ring-inset ring-white max-md:mt-5">
                                    <div
                                        className={`hamburger-menu ${
                                            open ? "open" : ""
                                        }`}
                                    >
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </Disclosure.Button>
                                <img
                                    className="block lg:hidden h-20 mt-4"
                                    src={LogoBlack}
                                    onClick={() => navigate("/")}
                                    alt="Mod-a"
                                />
                            </div>
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full">
                                <div className="hidden max-sm:ml-6 md:block w-full max-xl:w-full">
                                    <div className="flex justify-between items-center max-xl:text-sm ">
                                        <div className="max-w-3xl max-xl:max-w-2xl flex justify-center items-center">
                                            <div className="flex w-[300px] max-lg:w-[200px] ">
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto md:block relative top-[10px]"
                                                        src={Logo}
                                                        alt="Mod-a"
                                                    />
                                                </a>
                                            </div>
                                            <div className="w-full flex justify-start items-center pl-12 max-lg:pl-4  text-white gap-8 max-xl:gap-4 mt-8">
                                                {navigation.map((item, i) => (
                                                    <a
                                                        key={i}
                                                        className={
                                                            navItem ===
                                                            `${item.href}`
                                                                ? "text-base text font-medium  text-[#535353]"
                                                                : "text-base font-normal text-[#535353]  hover:opacity-50 duration-150 delay-150 text-with-underline "
                                                        }
                                                        href={`${item.href}`}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <div className=" max-w-xs flex justify-center items-center gap-2 relative   text-[#535353] text-base font-light max-xl:pr-4 mt-8">
                                            <p
                                                className={`${
                                                    i18n.language === "en"
                                                        ? "cursor-pointer font-bold"
                                                        : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                                }`}
                                                onClick={() =>
                                                    changeLanguage("en")
                                                }
                                            >
                                                ENG
                                            </p>
                                            /
                                            <p
                                                className={`${
                                                    i18n.language === "tr"
                                                        ? "cursor-pointer font-bold"
                                                        : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                                }`}
                                                onClick={() =>
                                                    changeLanguage("tr")
                                                }
                                            >
                                                TR
                                            </p>
                                            <div className="flex justify-between items-center max-xl:hidden pl-2 gap-3">
                                                <a
                                                    href="https://tr.linkedin.com/company/mod-architects?trk=public_profile_experience-item_profile-section-card_subtitle-click"
                                                    target="blank"
                                                >
                                                    <FaLinkedin className="text-2xl hover:scale-110 duration-150 delay-150 cursor-pointer " />
                                                </a>

                                                <a
                                                    href="https://www.instagram.com/modarchitects.istanbul/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                                                    target="blank"
                                                >
                                                    <FaInstagram className="text-2xl hover:scale-110 duration-150 delay-150 cursor-pointer " />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel
                        className={`md:hidden  opacity-0 duration-200 delay-200 ${
                            open ? "opacity-95" : "opacity-0"
                        }`}
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3 navbar-open-close">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    target={item.target ? "_blank" : ""}
                                    className="block px-3 py-2 rounded-md  font-medium"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <div className="flex justify-start items-center px-3 py-2 gap-5">
                                <p
                                    className={`${
                                        i18n.language === "en"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </p>
                                /
                                <p
                                    className={`${
                                        i18n.language === "tr"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </p>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
