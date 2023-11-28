import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { useNavigate } from "react-router-dom";

function Footer() {
    const date = new Date();
    const navigate = useNavigate();
    return (
        <div className="relative bottom-0 h-32 max-md:h-20 bg-white w-full flex justify-between items-center px-10 max-md:px-1">
            <p className="font-medium max-md:text-xs text-[#9e9e9e]">
                {" "}
                © mod-a copyright {date.getFullYear()}
            </p>
            <div className="flex justify-between items-center">
                <img
                    className="w-10 hover:scale-110 duration-150 delay-150 cursor-pointer"
                    src={facebook}
                    alt="facebookIcon"
                />
                <img
                    className="w-10 hover:scale-110 duration-150 delay-150 cursor-pointer"
                    src={instagram}
                    alt="instagramIcon"
                />
                <img
                    className="w-10 hover:scale-110 duration-150 delay-150 cursor-pointer"
                    src={twitter}
                    alt="twitterIcon"
                />
            </div>
        </div>
    );
}

export default Footer;
