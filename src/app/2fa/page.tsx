"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "@/styles/insta-hack/desktop/home.css";
import AOS from "aos";
import "../../styles/aos.css";

import NavBar from "@/components/insta-hack/desktop/NavBar";
import Content from "@/components/insta-hack/desktop/2fa";
import Footer from "@/components/insta-hack/desktop/Footer";

import SideBar from "@/components/insta-hack/mobile/Sidebar";
import MobileContent from "@/components/insta-hack/mobile/2fa";
import MobileFooter from "@/components/insta-hack/mobile/Footer";

function twofa() {
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
                <MobileContent />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <Content />
                <Footer />
            </div>
        );
    }
}
export default twofa;
