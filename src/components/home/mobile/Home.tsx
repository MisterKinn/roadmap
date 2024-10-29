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
                const homeHeight = homeElement.offsetHeight + 5000;

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
            <header className="mobile-header">
                <img
                    src="img/gmsh-mobile.png"
                    alt="GMSH RoadMap"
                    style={{
                        filter: `brightness(${brightness})`,
                        transform: `scale(${zoom})`, // Add transform for zoom effect
                        transition: "transform 0.1s ease-out", // Smooth zooming
                    }}
                    className="mobile-header-img"
                />

                <div className="mobile-text-container">
                    <section className="mobile-section" data-aos="fade-up">
                        <div className="mobile-section-content">
                            <h1>상상을 현실로 만드는 웹 개발 동아리,</h1>
                            <h2>RoadMap입니다.</h2>
                        </div>
                    </section>
                </div>

                <div className="mobile-text-container2">
                    <section className="mobile-section">
                        <div
                            className="mobile-section-content"
                            data-aos="fade-up"
                        >
                            <p>
                                웹 개발은 상상을 현실로 만들어내는 과정입니다.
                                <br />
                                머리속에만 가지고 있던 멋진 아이디어를
                                <br />웹 개발을 통해 현실로 만들고,
                                <br />
                                그 결과를 다른 사람들과 공유하면 어떨까요?
                                <br />
                                웹 개발에서 창작과 성장의 즐거움을
                                <br />
                                느낄 수 있으면 어떨까요?
                                <br />
                                <br />
                                이곳에 모인 사람들은 현실화의 즐거움을 경험하고
                                <br />
                                성장의 기쁨을 만끽하며
                                <br />웹 개발을 통해 새로운 역사를 만들고
                                있습니다.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mobile-img-container" data-aos="fade-up">
                    <img
                        loading="lazy"
                        src="img/arrow.png"
                        className="mobile-arrow"
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;
