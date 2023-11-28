import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Teams from "../pages/Teams/Teams";
import Projects from "../pages/Projects/Projects";
import ProjectsDetail from "../pages/Projects/ProjectsDetail";

function AppRoute() {
    return (
        <Routes>
            <Route>
                {/* Örnek tanımlama.*/}
                <Route path="" element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/:slug"
                        element={<ProjectsDetail />}
                    />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/teams" element={<Teams />} />
                </Route>
            </Route>

            <Route path="/register" element={<div>register</div>} />
            {/* Örnek tanımlama. 
      <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
}

export default AppRoute;
