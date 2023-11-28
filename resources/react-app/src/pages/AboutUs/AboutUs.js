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
            <div className="w-full h-auto relative mt-12 ">
                <img
                    className="relative w-full h-[500px] max-2xl:h-[400px] max-xl:h-[300px] max-lg:h-[200px] max-sm:w-full max-sm:h-full  max-md:mb-10 object-cover"
                    src={TeamBanner}
                    alt="ContactBanner"
                />
                {window.innerWidth > 500 ? (
                    <img
                        className="absolute  max-2xl:w-[45%] max-md:w-[20rem]  -bottom-1  right-0 line-index"
                        src={Line}
                        alt="Line"
                    />
                ) : (
                    <img
                        className="absolute  w-[66%]  -bottom-1  right-0 line-index"
                        src={Line}
                        alt="Line"
                    />
                )}

                <p
                    onClick={handleGoBack}
                    className="  max-lg:text-white header-line-index  absolute bottom-0 right-20 max-xl:right-16 max-lg:right-9 max-md:right-3 text-xl max-md:text-sm cursor-pointer font-light hover:scale-105 duration-150 delay-150"
                >
                    {t("back")}
                </p>
            </div>

            <div className="w-full px-36 max-2xl:px-20 max-xl:px-10 max-md:px-4 mb-12 mt-12 max-xl:mt-8">
                <div className="w-full flex justify-between max-sm:flex-col items-center">
                    <div className="max-w-4xl max-2xl:w-7/12 max-sm:w-full flex flex-col justify-between items-start gap-10 font-light text-base">
                        <p>
                            <i>MOD Architects</i>, İstanbul merkezli çok
                            disiplinli bir mimarlık ofisidir. Her projede insan
                            odaklı bir bakış açısı benimseyen ekibiyle, yaşam
                            alanlarını işlevsel, estetik ve sürdürülebilir
                            biçimde yeniden şekillendirme hedefini taşır.
                            Zamanın getirdiği zorlukları inovatif çözümlerle
                            aşıp, ekonomik engellere rağmen en üst seviyede
                            değer sunarak, sosyal ve kültürel çeşitliliği
                            analitik bir yaklaşımla bir araya getirip, her proje
                            için özgün mimari yaklaşımlar geliştirir.
                        </p>
                        <p>
                            MOD Architects, farklı alanlarda yürüttüğü
                            projelerle deneyim yelpazesini sürekli
                            genişletmektedir. İşverenlerle yakın işbirliği
                            içinde, projelerin başlangıcından sonuna kadar
                            disiplinli bir yaklaşımla ilerlemek ana
                            prensiplerindendir.
                        </p>
                        <img src={ada} alt="adaimg" />
                    </div>
                    <div className="max-w-[24rem] max-2xl:w-4/12 max-sm:w-full max-sm:text-center max-sm:pl-0 text-4xl font-extrabold text-[#535353] opacity-40 text-end  pl-32">
                        <i className="float-right max-sm:float-center">
                            Geçmişin ilhamını, geleceğin yaratıcılığı ve modern
                            tasarım anlayışıyla birleştirerek, mekanlara özgün
                            kimlikler kazandırmak.
                        </i>
                    </div>
                </div>
                <div className="w-full flex justify-between max-sm:flex-col items-start mt-12">
                    <div className="max-w-2xl max-2xl:w-5/12 max-sm:w-full flex flex-col justify-between items-start gap-10 font-light text-base">
                        <img src={teamimage} alt="teamimage" />
                        <p>
                            Ekibin vizyonu, tasarım süreçlerinde yerin
                            geleneğini, iklimini ve çağdaş kültürünü anlayarak,
                            bu dinamikleri modern ve inovatif tasarım
                            anlayışlarıyla birleştirmektir. Ekip, sadece estetik
                            bir form yaratma değil, aynı zamanda çevresine
                            uyumlu, işlevsel ve anlamlı mekanlar tasarlama amacı
                            taşır.
                        </p>
                        <p>
                            <b className="font-bold opacity-50">MOD A</b>
                            rchitects, mimari projelerini daha büyük bir bağlam
                            içinde ele alarak, mekanın kimliğini ve karakterini
                            ortaya çıkarmaktır. Bu bağlam, bölgenin geçmişi ve
                            geleceği arasında köprü kurmak anlamında önemlidir.
                            Mimari çözümler, binaları sadece fiziksel yapılar
                            olarak değil, aynı zamanda kültürel ve sosyal
                            etkileşimlerin bir yansıması olarak ele alır.
                        </p>
                        <p>
                            İnsan ve doğa ilişkisini çağdaş bir yorumla
                            somutlaştıran fütüristik, organik, teknolojik olarak
                            gelişmiş tasarımlar oluşturmaya çalışan MOD
                            Architects ekibi, her zaman tasarımın merkezinde
                            tuttuğu kullanıcıya, aitlik hissini kaybettirmeden
                            farklı yaklaşımlar içeren, tercih edilebilir
                            mekanlar sunmaktadır.
                        </p>
                    </div>
                    <div className="max-w-2xl max-2xl:w-5/12 max-sm:w-full flex flex-col justify-between items-start gap-10 font-light text-base">
                        <p>
                            Ekibin vizyonu, tasarım süreçlerinde yerin
                            geleneğini, iklimini ve çağdaş kültürünü anlayarak,
                            bu dinamikleri modern ve inovatif tasarım
                            anlayışlarıyla birleştirmektir. Ekip, sadece estetik
                            bir form yaratma değil, aynı zamanda çevresine
                            uyumlu, işlevsel ve anlamlı mekanlar tasarlama amacı
                            taşır.
                        </p>
                        <p>
                            <b className="font-bold opacity-50">MOD A</b>
                            rchitects, mimari projelerini daha büyük bir bağlam
                            içinde ele alarak, mekanın kimliğini ve karakterini
                            ortaya çıkarmaktır. Bu bağlam, bölgenin geçmişi ve
                            geleceği arasında köprü kurmak anlamında önemlidir.
                            Mimari çözümler, binaları sadece fiziksel yapılar
                            olarak değil, aynı zamanda kültürel ve sosyal
                            etkileşimlerin bir yansıması olarak ele alır.
                        </p>
                        <p>
                            İnsan ve doğa ilişkisini çağdaş bir yorumla
                            somutlaştıran fütüristik, organik, teknolojik olarak
                            gelişmiş tasarımlar oluşturmaya çalışan MOD
                            Architects ekibi, her zaman tasarımın merkezinde
                            tuttuğu kullanıcıya, aitlik hissini kaybettirmeden
                            farklı yaklaşımlar içeren, tercih edilebilir
                            mekanlar sunmaktadır.
                        </p>
                        <img src={secondimage} alt="teamimage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
