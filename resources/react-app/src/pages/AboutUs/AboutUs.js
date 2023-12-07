import React, { useEffect } from "react";
import TeamBanner from "../../assets/AboutUs/aboutusbanner.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Line from "../../assets/cizgi.png";
import MobilLine from "../../assets/mobilline.png";
import ada from "../../assets/AboutUs/ada.png";
import teamimage from "../../assets/AboutUs/aboutusimage.png";
import secondimage from "../../assets/AboutUs/secondimage.jpg";

function AboutUs() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    const { t, i18n } = useTranslation();
    console.log(window.innerWidth);
    return (
        <div>
            <div className="w-full h-auto relative mt-12 max-md:mt-8">
                <img
                    className="relative w-full h-[600px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px] max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover"
                    src={TeamBanner}
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
            <div className="w-full flex justify-between max-sm:flex-col items-center px-5 mt-10 max-lg:flex-col">
                <div className="w-2/4 max-lg:w-full flex flex-col justify-between items-center gap-10 font-light text-base ">
                    <div className="max-w-[500px] max-lg:max-w-none font-normal  max-lg:text-base max-lg:text-justify  text-[#464646] opacity-60 leading-7 text-justify">
                        <p className="">
                            <i>
                                <b>MOD Architects</b>
                            </i>
                            , İstanbul merkezli çok disiplinli bir mimarlık
                            ofisidir. Her projede insan odaklı bir bakış açısı
                            benimseyen ekibiyle, yaşam alanlarını işlevsel,
                            estetik ve sürdürülebilir biçimde yeniden
                            şekillendirme hedefini taşır. Zamanın getirdiği
                            zorlukları inovatif çözümlerle aşıp, ekonomik
                            engellere rağmen en üst seviyede değer sunarak,
                            sosyal ve kültürel çeşitliliği analitik bir
                            yaklaşımla bir araya getirip, her proje için özgün
                            mimari yaklaşımlar geliştirir.
                        </p>
                        <p className=" ">
                            MOD Architects, farklı alanlarda yürüttüğü
                            projelerle deneyim yelpazesini sürekli
                            genişletmektedir. İşverenlerle yakın işbirliği
                            içinde, projelerin başlangıcından sonuna kadar
                            disiplinli bir yaklaşımla ilerlemek ana
                            prensiplerindendir.
                        </p>
                        <p>
                            MOD Architects, yenilikçi ve dinamik kadrosuyla,
                            ilerleyen teknolojiyi izleyerek, farklı ölçeklerdeki
                            projeler - master planlar, konutlar, kompleks
                            yapılar ve iç mekanlar - ile modern çağın
                            gereksinimlerine uyumlu tasarımlar sunarak, sadece
                            çağın ötesine geçmeyi değil, aynı zamanda geleceği
                            şekillendirmeyi amaçlar.
                        </p>
                    </div>

                    <img
                        className="w-full h-full"
                        src={ada}
                        alt="aboutusimage"
                    />
                </div>
                <div className="w-2/4 max-lg:w-full  max-lg:flex max-lg:justify-center max-lg:items-center max-sm:text-center max-sm:pl-0 text-4xl max-lg:text-3xl max-sm:text-2xl font-extrabold text-[#535353] opacity-40 text-end  px-[10%] max-lg:px-0 max-lg:pr-0">
                    <i className="float-right  max-lg:text-center max-lg:my-10 max-lg:max-w-none max-lg:float-center max-w-[300px] ">
                        Geçmişin ilhamını, geleceğin yaratıcılığı ve modern
                        tasarım anlayışıyla birleştirerek, mekanlara özgün
                        kimlikler kazandırmak.
                    </i>
                </div>
            </div>
            <div className="w-full flex justify-between   max-sm:flex-col items-start mt-12">
                <div className="w-full flex  justify-between items-center flex-row-reverse gap-10 font-light text-base px-5 max-lg:flex-col">
                    <div className="w-2/4 max-lg:hidden">
                        <img
                            className="w-full"
                            src={teamimage}
                            alt="teamimage"
                        />
                    </div>
                    <div className="w-2/4 max-lg:w-full flex justify-center items-center">
                        <div className="max-w-[500px] font-normal  max-lg:max-w-none  max-lg:text-base max-lg:text-justify text-[#464646] opacity-60 leading-7 text-justify">
                            <p>
                                Ekibin vizyonu, tasarım süreçlerinde yerin
                                geleneğini, iklimini ve çağdaş kültürünü
                                anlayarak, bu dinamikleri modern ve inovatif
                                tasarım anlayışlarıyla birleştirmektir. Ekip,
                                sadece estetik bir form yaratma değil, aynı
                                zamanda çevresine uyumlu, işlevsel ve anlamlı
                                mekanlar tasarlama amacı taşır.
                            </p>{" "}
                            <br />
                            <p>
                                <b className="font-bold opacity-50">MOD A</b>
                                rchitects, mimari projelerini daha büyük bir
                                bağlam içinde ele alarak, mekanın kimliğini ve
                                karakterini ortaya çıkarmaktır. Bu bağlam,
                                bölgenin geçmişi ve geleceği arasında köprü
                                kurmak anlamında önemlidir. Mimari çözümler,
                                binaları sadece fiziksel yapılar olarak değil,
                                aynı zamanda kültürel ve sosyal etkileşimlerin
                                bir yansıması olarak ele alır.
                            </p>
                            <br />
                            <p>
                                İnsan ve doğa ilişkisini çağdaş bir yorumla
                                somutlaştıran fütüristik, organik, teknolojik
                                olarak gelişmiş tasarımlar oluşturmaya çalışan
                                MOD Architects ekibi, her zaman tasarımın
                                merkezinde tuttuğu kullanıcıya, aitlik hissini
                                kaybettirmeden farklı yaklaşımlar içeren, tercih
                                edilebilir mekanlar sunmaktadır.
                            </p>
                            <i>
                                <b>
                                    Yerel Kimliği Modern Yaklaşımlarla Yeniden
                                    Tanımlamak
                                </b>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-full  max-md:px-4 mb-12 mt-12 max-xl:mt-8"></div>{" "}
            </div>
        </div>
    );
}

export default AboutUs;
