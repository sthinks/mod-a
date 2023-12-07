import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    const date = new Date();
    const navigate = useNavigate();
    return (
        <div className="relative bottom-0 h-32 max-md:h-20 bg-white w-full flex justify-between items-center px-10 max-md:px-5">
            <p className="font-medium max-md:text-xs text-[#9e9e9e]">
                {" "}
                © mod-a copyright {date.getFullYear()}
            </p>
            <div className="flex justify-between items-center text-[#535353] gap-3">
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
    );
}

export default Footer;
