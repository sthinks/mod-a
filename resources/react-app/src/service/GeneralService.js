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
const getSliders = async (slug) => {
    const result = await axiosInstance.get(`get-sliders`);
    return result.data;
};
const exportFunction = {
    getTeams,
    getProjects,
    getProject,
    getSliders,
};

export default exportFunction;
