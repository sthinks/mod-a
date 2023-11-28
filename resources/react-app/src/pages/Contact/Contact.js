import React from "react";
import ContactBanner from "../../assets/Contact/contactbanner.png";
import { useTranslation } from "react-i18next";
import { GoogleMap, LoadScript } from "react-google-maps";
import map from "./map";
import CustomMap from "./map";
function Contact() {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full">
            <div className="w-full h-auto relative transform -translate-y-[18%]">
                <img
                    className="relative w-full"
                    src={ContactBanner}
                    alt="ContactBanner"
                />
            </div>
            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10 max-md:px-2 -transform -translate-y-[20%]">
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
                            <a href="www.mod-a.com" target="blank">
                                www.mod-a.com
                            </a>

                            <br />
                            <a href="12">0(531) 505 50 00</a>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                className="pt-10"
                title="Mod-a Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1262063543395!2d29.098467900577994!3d41.000610773783734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac883af3be5e1%3A0x8bdd69abed471d23!2sBarbaros%2C%20Varyap%20Meridian%20A%20Blok%2C%2034746%20Ata%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700218581404!5m2!1str!2str"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Contact;
