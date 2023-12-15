import React from "react";
import ContactBanner from "../../assets/AboutUs/aboutusbanner.png";
import { useTranslation } from "react-i18next";
import Line from "../../assets/cizgi.png";
import { useState } from "react";

function Contact() {
    const { t, i18n } = useTranslation();
    const [hover, setHover] = useState(false);

    return (
        <div className="w-full">
            <div className="w-full h-auto relative mt-7 max-md:mt-8">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px] max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover"
                    src={ContactBanner}
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
            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10 max-md:px-5  mt-12 max-xl:mt-8">
                <div className="w-3/6 max-md:w-full">
                    <p className="text-4xl max-xl:text-3xl max-md:text-2xl  font-medium opacity-80 text-[#535353]">
                        {t("contact_title")}
                    </p>
                    <div className="mt-16 text-[#818181] text-xl max-md:text-lg font-light">
                        <p className="my-6">
                            Varyap Medidian A BLOK <br /> Grand Tower <br />{" "}
                            D:NO:8 <br /> ATAŞEHİR / İSTANBUL{" "}
                        </p>
                        <div className="my-6">
                            <a href="mailto:info@mod-a.com">info@mod-a.com</a>
                            <br />
                            <a href="mailto:info@mod-a.com">
                                careers@mod-a.com
                            </a>
                            <br />
                            <a href="mailto:info@mod-a.com">intern@mod-a.com</a>

                            <br />
                            <a href="https://www.mod-a.com" target="blank">
                                www.mod-a.com
                            </a>

                            <br />
                            <a href="12">0(531) 505 50 00</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto relative mt-10">
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
    );
}

export default Contact;
