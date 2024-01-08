import axiosInstance from "../utils/axiosClient";

const getTeams = async (lang) => {
    const result = await axiosInstance.get("get-teams", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Projler
const getProjects = async (lang) => {
    const result = await axiosInstance.get("get-projects", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};

const getProject = async (slug, lang) => {
    const result = await axiosInstance.get(`get-project/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result;
};
//Ana sayfa slider
const getSliders = async (slug) => {
    const result = await axiosInstance.get(`get-sliders`);
    return result.data;
};
// Haberler
const getNews = async (lang) => {
    const result = await axiosInstance.get("get-news", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const getNew = async (slug, lang) => {
    const result = await axiosInstance.get(`get-new/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result;
};
const getBanners = async () => {
    const result = await axiosInstance.get("get-banners");
    return result.data;
};
const exportFunction = {
    getTeams,
    getProjects,
    getProject,
    getSliders,
    getNews,
    getNew,
    getBanners,
};

export default exportFunction;
