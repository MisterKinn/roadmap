"use client";
import { useState, useEffect } from "react";

function Home() {
    const [brightness, setBrightness] = useState(0.4);
    const [zoom, setZoom] = useState(1); // New state for zoom level

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                const scrollPosition = window.scrollY;
                const homeHeight = homeElement.offsetHeight + 14000;

                // Adjust brightness
                const newBrightness = Math.max(
                    0.4 - scrollPosition / homeHeight,
                    0
                );
                setBrightness(newBrightness);

                // Adjust zoom level
                const maxZoom = 2; // Maximum zoom level
                const newZoom =
                    1 + (scrollPosition / homeHeight) * (maxZoom - 1);
                setZoom(newZoom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/gmsh.png"
                    alt="GMSH RoadMap"
                    style={{
                        filter: `brightness(${brightness})`,
                        transform: `scale(${zoom})`, // Add transform for zoom effect
                        transition: "transform 0.1s ease-out", // Smooth zooming
                    }}
                    className="header-img"
                />

                <div className="text-container">
                    <section className="section" data-aos="fade-up">
                        <div className="section-content">
                            <h1>상상을 현실로 만드는 웹 개발 동아리,</h1>
                            <h2>RoadMap입니다.</h2>
                        </div>
                    </section>
                </div>


                <div className="img-container">
                    <img loading="lazy" src="img/arrow.png" className="arrow" />
                </div>
            </header>
        </div>
    );
}

export default Home;
