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
            about_text_1:
                "rchitects, İstanbul merkezli çok disiplinli bir mimarlık ofisidir. Her projede insan odaklı bir bakış açısı benimseyen ekibiyle, yaşam alanlarını işlevsel, estetik ve sürdürülebilir biçimde yeniden şekillendirme hedefini taşır. Zamanın getirdiği zorlukları inovatif çözümlerle aşıp, ekonomik engellere rağmen en üst seviyede değer sunarak, sosyal ve kültürel çeşitliliği analitik bir yaklaşımla bir araya getirip, her proje için özgün mimari yaklaşımlar geliştirir.",
            about_text_2:
                "MOD Architects, farklı alanlarda yürüttüğü projelerle deneyim yelpazesini sürekli genişletmektedir. İşverenlerle yakın işbirliği içinde, projelerin başlangıcından sonuna kadar disiplinli bir yaklaşımla ilerlemek ana  prensiplerindendir.",
            about_text_3:
                "MOD Architects, yenilikçi ve dinamik kadrosuyla, ilerleyen teknolojiyi izleyerek, farklı ölçeklerdeki projeler - master planlar, konutlar, kompleks yapılar ve iç mekanlar - ile modern çağıngereksinimlerine uyumlu tasarımlar sunarak, sadece çağın ötesine geçmeyi değil, aynı zamanda geleceğişekillendirmeyi amaçlar.",
            about_text_4:
                "Geçmişin ilhamını, geleceğin yaratıcılığı ve modern tasarım anlayışıyla birleştirerek, mekanlara özgün kimlikler kazandırmak.",
            about_text_5:
                "Ekibin vizyonu, tasarım süreçlerinde yerin geleneğini, iklimini ve çağdaş kültürünü anlayarak, bu dinamikleri modern ve inovatif tasarım anlayışlarıyla birleştirmektir. Ekip, sadece estetik bir form yaratma değil, aynı zamanda çevresine uyumlu, işlevsel ve anlamlı mekanlar tasarlama amacı taşır.",
            about_text_6:
                " ,mimari projelerini daha büyük bir bağlam içinde ele alarak, mekanın kimliğini ve karakterini ortaya çıkarmaktır. Bu bağlam, bölgenin geçmişi ve geleceği arasında köprü kurmak anlamında önemlidir. Mimari çözümler, binaları sadece fiziksel yapılar olarak değil, aynı zamanda kültürel ve sosyal etkileşimlerin bir yansıması olarak ele alır.",
            about_text_7:
                "İnsan ve doğa ilişkisini çağdaş bir yorumla somutlaştıran fütüristik, organik, teknolojik olarak gelişmiş tasarımlar oluşturmaya çalışan MOD Architects ekibi, her zaman tasarımın merkezinde tuttuğu kullanıcıya, aitlik hissini kaybettirmeden farklı yaklaşımlar içeren, tercih edilebilir mekanlar sunmaktadır.",
            about_text_8:
                "Yerel Kimliği Modern Yaklaşımlarla Yeniden Tanımlamak",
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
            about_text_1:
                "rchitects an Istanbul-based multidisciplinary architectural firm, aims to reshape living spaces in a functional, aesthetic, and sustainable manner with its team that adopts a human-centric approach in every project. Overcoming the challenges brought by time with innovative solutions, providing maximum value despite economic barriers, and bringing together social and cultural diversity with an analytical approach, the firm develops unique architectural approaches for each project.",
            about_text_2:
                "Engaging in projects across diverse domains, MOD Architects continually expands its range of expertise. Working closely with clients, the firm adheres to a disciplined approach from the inception to the completion of projects. ",
            about_text_3:
                "With its innovative and dynamic team, MOD Architects keeps pace with advancing technology, delivering designs that align with the requirements of the modern era for projects of various scales, including master plans, residences, complex structures, and interiors. The goal is not only to transcend the present but also to shape the future.",
            about_text_4:
                "Blending the inspiration from the past with the creativity of the future and a modern design philosophy, MOD Architects aims to impart unique identities to spaces.",
            about_text_5:
                "The team's vision involves understanding the context of a place, its traditions, climate, and contemporary culture, and integrating these dynamics with modern and innovative design principles. The team strives not only to create aesthetically pleasing forms but also to design spaces that are harmonious, functional, and meaningful.",
            about_text_6:
                "Approaching architectural projects within a broader context, MOD Architects seeks to reveal the identity and character of a space. This context is crucial in bridging the gap between the region's past and future. The architectural solutions consider buildings not only as physical structures but also as reflections of cultural and social interactions.",
            about_text_7:
                "The team at MOD Architects aims to materialize the relationship between humans and nature with a contemporary interpretation, creating futuristic, organic, and technologically advanced designs. Always placing the user at the center of design, the team provides spaces with various approaches, maintaining a sense of belonging without losing the preferred atmosphere.",
            about_text_8: "Redefining Local Identity with Modern Approaches",
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
