"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "@/styles/insta-hack/desktop/home.css";
import "@/styles/insta-hack/mobile/home.css";
import AOS from "aos";
import "../../styles/aos.css";

import NavBar from "@/components/insta-hack/desktop/NavBar";
import Home from "@/components/insta-hack/desktop/Home";
import Footer from "@/components/insta-hack/desktop/Footer";

import SideBar from "@/components/insta-hack/mobile/Sidebar";
import MobileHome from "@/components/insta-hack/mobile/Home";
import MobileFooter from "@/components/insta-hack/mobile/Footer";

function InstaHack() {
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    if (isMobile) {
        return (
            <div id="page">
                <SideBar />
                <MobileHome />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <Home />
                <Footer />
            </div>
        );
    }
}
export default InstaHack;
