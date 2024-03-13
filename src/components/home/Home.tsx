"use client";
import { useState, useEffect, useRef } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import styled from "styled-components";

const MobileHome = styled.div`
    @media only screen and (max-width: 800px) {
        .hello {
            font-size: 1.6em;
        }

        .kinn {
            font-size: 6em;
        }

        .introduce {
            font-size: 1.8em;
        }

        .wave {
            margin-top: -1em;
        }
    }
`;

function Home() {
    const [imageSrc, setImageSrc] = useState("img/kinn-banner.png");

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 1000) {
                setImageSrc("img/kinn-banner-mobile.jpg");
            } else {
                setImageSrc("img/kinn-banner.png");
            }
        };
        handleResize();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const arrowRef = useRef<HTMLImageElement>(null);

    const scrollDown = () => {
        window.scrollTo({ top: 1000, behavior: "smooth" });
    };

    useEffect(() => {
        if (arrowRef.current) {
            arrowRef.current.addEventListener("click", scrollDown);
        }

        return () => {
            if (arrowRef.current) {
                arrowRef.current.removeEventListener("click", scrollDown);
            }
        };
    }, [arrowRef, scrollDown]);

    return (
        <div id="home" className="body">
            <MobileHome>
                <img src={imageSrc} className="header-img" />
                <div className="header-container">
                    <h2 className="hello" data-aos="fade-up">
                        Hello, I'm
                    </h2>
                    <h1 className="kinn" data-aos="fade-up">
                        Kinn
                    </h1>
                    <div>
                        <div className="introduce">
                            Nice to meet you!
                            <img
                                loading="lazy"
                                draggable="false"
                                src="img/wave.png"
                                className="wave"
                            />
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="img/arrow.png"
                        className="arrow"
                        ref={arrowRef}
                    />
                </div>
            </MobileHome>
        </div>
    );
}

export default Home;
