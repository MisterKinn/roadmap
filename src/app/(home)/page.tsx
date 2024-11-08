"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/roadmap.css";

import "@/styles/home/desktop/navbar.css";
import "@/styles/home/desktop/home.css";
import "@/styles/home/desktop/feature.css";
import "@/styles/home/desktop/card.css";
import "@/styles/home/desktop/promotion.css";

import "@/styles/home/mobile/sidebar.css";
import "@/styles/home/mobile/home.css";
import "@/styles/home/mobile/feature.css";
import "@/styles/home/mobile/card.css";
import "@/styles/home/mobile/promotion.css";

import NavBar from "@/components/home/desktop/NavBar";
import Home from "@/components/home/desktop/Home";
import Feature from "@/components/home/desktop/Feature";
import About from "@/components/home/desktop/About";
import Curriculum from "@/components/home/desktop/Curriculum";
import Project from "@/components/home/desktop/Project";
import Profile from "@/components/home/desktop/Profile";
import Promotion from "@/components/home/desktop/Promotion";

import Sidebar from "@/components/home/mobile/SideBar";
import MobileHome from "@/components/home/mobile/Home";
import MobileFeature from "@/components/home/mobile/Feature";
import MobileAbout from "@/components/home/mobile/About";
import MobileCurriculum from "@/components/home/mobile/Curriculum";
import MobileProject from "@/components/home/mobile/Project";
import MobileProfile from "@/components/home/mobile/Profile";
import MobilePromotion from "@/components/home/mobile/Promotion";

function RoadMap() {
    const [isClient, setIsClient] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    useEffect(() => {
        setIsClient(true);
        AOS.init({ duration: 1000 });
    }, []);

    if (!isClient) return null;

    if (isMobile) {
        return (
            <div>
                <Analytics />
                <Sidebar />
                <MobileHome />
                <MobileFeature />
                <MobileAbout />
                <MobileCurriculum />
                <MobileProject />
                <MobileProfile />
                <MobilePromotion />
            </div>
        );
    } else {
        return (
            <div>
                <Analytics />
                <NavBar />
                <Home />
                <Feature />
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
