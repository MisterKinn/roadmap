"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/roadmap.css";

import Home from "@/components/home/Home";
import About from "@/components/home/About";
import Curriculum from "@/components/home/Curriculum";
import Project from "@/components/home/Project";
import Profile from "@/components/home/Profile";
import Promotion from "@/components/home/Promotion";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";

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
                <Home />
                <About />
                <Curriculum />
                <Project />
                <Profile />
                <Promotion />
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default RoadMap;
