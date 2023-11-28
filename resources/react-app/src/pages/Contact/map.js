// CustomMap.js

import React, { useEffect } from "react";
import customMapStyle from "./custom-map-style"; // custom-map-style.js dosyasını ekleyin

const CustomMap = () => {
    useEffect(() => {
        // Google Maps API'yi yükleme
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key={AIzaSyBITuwdXvTLvGmV9byAB7divHXJdF7N9lQ}&callback=initMap`;
        script.defer = true;
        script.async = true;

        // initMap fonksiyonunu tanımlayın
        window.initMap = () => {
            // Harita özelleştirme işlemleri
            const map = new window.google.maps.Map(
                document.getElementById("map"),
                {
                    center: {
                        lat: 41.000610773783734,
                        lng: 29.098467900577994,
                    },
                    zoom: 15,
                    styles: customMapStyle, // Özel harita stili
                }
            );

            // Harita üzerine diğer öğeleri eklemek için kullanabilirsiniz (örneğin, Marker)
            const marker = new window.google.maps.Marker({
                position: { lat: 41.000610773783734, lng: 29.098467900577994 },
                map: map,
                title: "Konum",
            });
        };

        // script etiketini ekleyin
        document.head.appendChild(script);

        // Script etiketini temizleme
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <div id="map" style={{ height: "450px", width: "100%" }}></div>;
};

export default CustomMap;
