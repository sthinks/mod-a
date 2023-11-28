import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function RootLayout() {
    return (
        <>
            <Header />

            {/* Buradaki div'e genel container css verilebilir. */}
            <Outlet />

            <Footer />
        </>
    );
}

export default RootLayout;
