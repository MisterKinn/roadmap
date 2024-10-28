"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/roadmap.css";
import "@/styles/desktop/navbar.css";
import "@/styles/desktop/card.css";
import "@/styles/desktop/promotion.css";

import NavBar from "@/components/home/desktop/NavBar";
import Home from "@/components/home/desktop/Home";
import About from "@/components/home/desktop/About";
import Curriculum from "@/components/home/desktop/Curriculum";
import Project from "@/components/home/desktop/Project";
import Profile from "@/components/home/desktop/Profile";
import Promotion from "@/components/home/desktop/Promotion";

import MobileHome from "@/components/home/mobile/Home";
import MobileAbout from "@/components/home/mobile/About";
import MobileCurriculum from "@/components/home/mobile/Curriculum";
import MobileProject from "@/components/home/mobile/Project";
import MobileProfile from "@/components/home/mobile/Profile";
import MobileBanner from "@/components/home/mobile/Banner";
import MobileFooter from "@/components/home/mobile/Footer";

function RoadMap() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div>
                <MobileHome />
                <MobileAbout />
                <MobileCurriculum />
                <MobileProject />
                <MobileProfile />
                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <Home />
                <About />
                <Curriculum />
                <Project />
                <Profile />
                <Promotion />
            </div>
        );
    }
}

export default RoadMap;
