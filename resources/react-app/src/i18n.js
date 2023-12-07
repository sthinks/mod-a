import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            haber: "HABERLER",
            konum: "KONUM",
            işveren: "İŞVEREN",
            yapialanı: "YAPI ALANI",
            konu: "KONU",
            yil: "YIL",
            contact_title: "İLETİŞİM",
            header_teams: "EKİP",
            header_news: "HABERLER",

            header_projects: "PROJELER",
            header_aboutus: "HAKKIMIZDA",
            devami: "Devamı için tıklayınız",
            back: "GERİ",
            home_right_text:
                "rchitects, İstanbul merkezli çok disiplinli bir mimarlık ofisidir. Her projede insan odaklı bir bakış açısı benimseyen ekibiyle, yaşam alanlarını işlevsel, estetik ve sürdürülebilir biçimde yeniden şekillendirme hedefini taşır. Zamanın getirdiği zorlukları inovatif çözümlerle aşıp, ekonomik engellere rağmen en üst seviyede değer sunarak, sosyal ve kültürel çeşitliliği analitik bir yaklaşımla bir araya getirip, her proje için özgün mimari yaklaşımlar geliştirir.",
        },
    },
    en: {
        translation: {
            haber: "NEWS",
            konum: "LOCATION",
            işveren: "TASKMASTER",
            yapialanı: "BUILDING AREA",
            konu: "SUBJECT",
            yil: "YEAR",
            contact_title: "CONTACT",
            header_teams: "TEAMS",
            header_news: "NEWS",
            header_projects: "PROJECTS",
            header_aboutus: "ABOUT US",
            devami: "Click for more",
            back: "BACK",
            home_right_text:
                "rchitects is a multidisciplinary architecture office based in Istanbul. With its team that adopts a human-oriented perspective in every project, it aims to reshape living spaces in a functional, aesthetic and sustainable way. It overcomes the challenges of time with innovative solutions, offers the highest level of value despite economic obstacles, brings together social and cultural diversity with an analytical approach, and develops unique architectural approaches for each project.",
        },
    },
};
i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: "en",
    resources,
});

export default i18n;
