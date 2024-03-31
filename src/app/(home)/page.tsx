"use client";
import React, { useState, useEffect } from "react";
import { handleRoadMap } from "../handleText.js";
import AOS from "aos";
import "../../styles/aos.css";
import "../../styles/roadmap.css";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

function RoadMap() {
    const [imgSrc, setImgSrc] = useState("img/gmsh.png");

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const handleResize = () => {
            if (window.innerWidth < 850) {
                setImgSrc("img/gmsh-mobile.png");
            } else {
                setImgSrc("img/gmsh.png");
            }
            handleRoadMap();
        };

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <img src={imgSrc} alt="GMSH RoadMap" className="header-img" />
                <div className="text-container">
                    <h1 className="title" data-aos="fade-up">
                        당신도 무언가를
                        <br />
                        상상해본 적이 있나요?
                    </h1>
                    <h2 className="sub-title" data-aos="fade-up">
                        우리는 상상을 현실로 구현합니다.
                        <br />
                        <strong>RoadMap</strong>은 교내 유일 웹 개발
                        동아리입니다. <br />
                        <strong>RoadMap</strong>과 함께라면 당신의 상상은 현실이
                        됩니다.
                    </h2>
                    <a
                        href="https://tally.so/r/meedxq"
                        target="_blank"
                        title="RoadMap 지원하기"
                    >
                        <button className="join" data-aos="fade-up">
                            동아리 지원하기
                        </button>
                    </a>
                </div>
            </header>

            <h2 className="introduce" data-aos="fade-up">
                소개
            </h2>
            <p className="intro-text" data-aos="fade-up">
                <strong>RoadMap</strong>은 교내 유일 웹 개발 동아리이며, <br />
                웹 개발을 학습하고 함께 실습하며 <br />웹 개발자로서의 역량을
                쌓아나가는 동아리입니다.
                <br />
                <br />
                여러분의 웹 사이트를 만들고 동아리 자체 서버와
                <br />
                도메인으로 웹을 호스팅하여 전 세계에서 여러분의 웹 페이지에
                <br />
                접속해 마법 같은 경험을 할 수 있도록 만듭니다.
                <br />
                <br />
                또한 동아리 내부에서 개인·팀 프로젝트를 통해
                <br />
                리더십 및 협업 능력을 향상시키고,
                <br />
                해커톤과 같은 대회에 참가하여 부원들의
                <br />
                실력과 <strong>RoadMap</strong>의 명성을 높입니다.
            </p>

            <h2 className="introduce" data-aos="fade-up">
                커리큘럼
            </h2>
            <div className="container">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/html.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>웹 개발 기초</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    웹의 작동 방식과 웹의 기본 언어인
                                    <br />
                                    HTML, CSS 등을 학습합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/js.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>프론트엔드 기초</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    프론트엔드 웹 개발의 기반 언어인
                                    <br />
                                    JavaScript를 학습하고
                                    <br />
                                    반응형 웹을 만듭니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/React.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>프론트엔드 심화</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    React를 통해 더욱 효율적으로
                                    <br />
                                    웹을 개발합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <img
                                loading="lazy"
                                src="img/Nextjs.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>웹개발 마스터</strong>
                            </span>
                            <div className="card-text">
                                <strong>
                                    Next.JS를 통해 대기업들이 <br />
                                    실무에서 사용하는 방식으로
                                    <br />
                                    웹을 개발합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="introduce" data-aos="fade-up">
                프로젝트
            </h2>
            <p data-aos="fade-up">
                아직까지 개발된 프로젝트가 없습니다.
                <br />
                동아리에 가입하셔서 첫 프로젝트를 함께 만들어보세요!
            </p>

            <h2 className="introduce" data-aos="fade-up">
                문의
            </h2>

            <div className="container">
                <a
                    href="mailto:help@gmsh.kr"
                    target="_blank"
                    title="Mail"
                    className="no-deco"
                >
                    <div className="spec">
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Mail</strong>
                                </span>
                                <div className="card-text">
                                    <strong>help@gmsh.kr</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="spec">
                    <a
                        href="https://www.instagram.com/gmsh_roadmap"
                        target="_blank"
                        title="Instagram"
                        className="no-deco"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Instagram</strong>
                                </span>
                                <div className="card-text">
                                    <strong>gmsh_roadmap</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="center">
                <h1 className="title" data-aos="fade-up">
                    지금도 새로운 역사를
                    <br />
                    만들고 있습니다
                </h1>
                <h2 className="sub-title" data-aos="fade-up">
                    RoadMap이 만드는 수많은 혁신의 순간들,
                    <br />
                    당신과 함께 만들고 싶습니다.
                    <br />
                    지금 RoadMap에 합류하세요!
                </h2>
                <a
                    href="https://tally.so/r/meedxq"
                    target="_blank"
                    title="RoadMap 지원하기"
                >
                    <button className="join" data-aos="fade-up">
                        동아리 지원하기
                    </button>
                </a>
            </div>

            <Banner />

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default RoadMap;
