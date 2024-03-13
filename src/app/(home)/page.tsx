"use client";
import { useState, useEffect, useRef } from "react";
import { handleAboutMe, handlePortfolio, handleExperience } from "../../app/handleText";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

const MobilePage = styled.div`
    @media only screen and (max-width: 800px) {
        .topbar {
            display: none;
        }

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

        .aboutme-text {
            font-size: 20px;
        }

        .list {
            font-size: 2.7em;
            margin-left: 0.75em;
            margin-bottom: 2em;
        }

        .spec {
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .card-container {
            height: 5em;
            width: 8em;
            margin-top: -1.5em;
        }

        .card-container2 {
            margin: -0.7em;
        }

        .card-title {
            font-size: 21px;
        }

        .card-text {
            font-size: 0.45em;
        }

        .card-footer {
            font-size: 14px;
        }
    }
`;

function Page() {
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
            handleAboutMe();
            handlePortfolio();
            handleExperience();
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
        <div>
            <TopBar />

            <MobilePage>
                <div id="home" className="body">
                    <img src={imageSrc} className="header-img" />
                    <div className="header-container">
                        <h2 className="hello" data-aos="fade-up">
                            Hello, I'm
                        </h2>
                        <h1 className="kinn" data-aos="fade-up">
                            Kinn
                        </h1>
                        <div>
                            <div className="introduce" data-aos="fade-up">
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
                    </div>

                    <div id="AboutMe" className="body">
                        <h1 className="AboutMe" data-aos="fade-up">About Me</h1>
                        <p className="aboutme-text" data-aos="fade-up">
                            I'm <strong>SeongYeon Kim</strong> (a.k.a.
                            <strong>Kinn</strong>),
                            <br />
                            and I'm a student FrontEnd Developer.
                            <br />I develop Website & Discord Bot.
                            <br />I love{" "}
                            <img
                                loading="lazy"
                                src="img/usa.webp"
                                className="usa"
                            /> &{" "}
                            <a
                                href="https://f1.com"
                                target="_blank"
                                title="F1"
                                className="link"
                            >
                                <img loading="lazy" src="img/f1.png" className="f1" />
                            </a>
                            <strong>.</strong>
                            <br />
                            My motto is{" "}
                            <span className="motto-text">
                                <strong>
                                    "The best way to predict the future
                                    <br />
                                    is to create it."
                                </strong>
                            </span>
                            <br />
                            I'm Junior of high school, and <br />
                            I'm dreaming of working at{" "}
                            <a
                                href="https://toss.im"
                                target="_blank"
                                title="TOSS"
                                className="link"
                            >
                                <img
                                    loading="lazy"
                                    src="img/toss.png"
                                    className="toss"
                                />
                            </a>
                            <br />& being citizen of{" "}
                            <span className="usa-element">
                                <strong>the United States of America.</strong>
                            </span>
                        </p>
                    </div>

                    <div id="Portfolio" className="body">
                <h2 className="list" data-aos="fade-up">Portfolio</h2>

                <div className="container" data-aos="fade-up">
                    <a
                        href="https://gmsh.kr"
                        target="_blank"
                        title="RoadMap"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/road-map.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>RoadMap</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="roadmap-element">
                                    Operating <strong>RoadMap</strong>
                                    ,
                                    <br />
                                    which is Web Club of my high school.
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        24. 03. 08~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href=" "
                        target="_blank"
                        title="Ileonang"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/ileonang.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Ileonang</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="ileonang-element">
                                    Made an <strong>Alarm App</strong>, which
                                    wakes up user
                                    <br /> by sending risky message to someone.
                                </span>
                                <div className="card-footer">
                                    <br />
                                    <strong>24. 02. 17 ~ 24. 02. 18.</strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/qr"
                        target="_blank"
                        title="QR Crafter"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/link.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>QR Crafter</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="qr-element">
                                    Making a{" "}
                                    <strong>QR Code Generate Service</strong>,
                                    <br />
                                    which generates & downloads QR Code.
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        23. 12. 08~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/converter"
                        target="_blank"
                        title="Dynamic Converter"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/converter.png"
                                    className="card-img"
                                />
                                <span className="card-title converter">
                                    <strong>Dynamic Converter</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="converter-element">
                                    Making an
                                    <strong>
                                        Exchange Rate Conversion Service
                                    </strong>
                                    ,
                                    <br />
                                    which calculates by the actual Exchange
                                    Rate.
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        23. 12. 02~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://gmsh.kr"
                        target="_blank"
                        title="RoadMap"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/Promise.webp"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Promise</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                Made a official Web Page{" "}
                                <strong>Promise</strong>
                                ,
                                <br />
                                which was Web Club of my high school.
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        23. 11. 06 ~ 24. 03. 07.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="/machim"
                        target="_blank"
                        title=".마침이"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/Machim.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>.마침이</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                Making My Own <strong>Discord Bot</strong>,
                                <br />
                                <strong>[ .마침이 ]</strong>.
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        21. 02. 07~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>

        <div id="Experience" className="body" data-aos="fade-up">
                <h2 className="list">Experience</h2>

                <div className="container">
                    <a
                        href=" "
                        target="_blank"
                        title="Ileonang"
                        className="spec"
                    >
                        <div className="card-container">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/trophy.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Highthon</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="highthon-element">
                                    Got a <strong>Grand Prize</strong> at{" "}
                                    <strong>Highthon</strong>,
                                    <br />
                                    which is hackathon of high school student.
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        24. 02. 17~24. 02. 18.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>

        <div id="Skills" className="body" data-aos="fade-up">
                <h2 className="list">Skills</h2>
                <div className="container">
                    <div className="spec">
                        <div className="card-container2 spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/html.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>HTML</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        20. 07. 09~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container2 spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/css.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>CSS</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        20. 08. 16~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container2 spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/js.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>JavaScript</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        21. 01. 13~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container scoll">
                    <div className="spec">
                        <div className="card-container2 spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/React.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>React</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        23. 05. 12~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container2 spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/Nextjs.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Next.JS</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        24. 02. 17~
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div id="Profile" className="body" data-aos="fade-up">
                <h2 id="Profile" className="list">
                    Profile
                </h2>
                <div className="container">
                    <a
                        href="mailto:kinn@kinn.kr"
                        target="_blank"
                        title="Mail"
                        className="spec"
                    >
                        <div className="card-container2 spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Mail</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        kinn@kinn.kr
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/kinn__sy/"
                        target="_blank"
                        title="Instagram"
                        className="spec"
                    >
                        <div className="card-container2 spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Instagram</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        kinn__sy
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://discord.com/users/602459845534416896/"
                        target="_blank"
                        title="Discord"
                        className="spec"
                    >
                        <div className="card-container2 spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/discord.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong>Discord</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        mrkinn
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/MisterKinn/"
                        target="_blank"
                        title="GitHub"
                        className="spec"
                    >
                        <div className="card-container2 spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/github.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong>Github</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        MisterKinn
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>

        </MobilePage>
        
        <Banner />
        <Footer />
    </div>
    );
}

export default Page;
