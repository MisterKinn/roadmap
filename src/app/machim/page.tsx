"use client";
import React, { useEffect } from "react";
import { handleAboutMachim } from "../../app/handleText";
import "../../styles/machim.css";
import AOS from "aos";
import "../../styles/aos.css";
import TopBar from "../../components/machim/TopBar";
import Banner from "../../components/home/Banner";
import Footer from "../../components/home/Footer";
import styled from "styled-components";

const MoblieMachim = styled.div`
    .uptime {
        width: 15%;
    }

    @media (max-width: 800px) {
        .about-machim {
            font-size: 20px;
        }

        .hello-world {
            font-size: 80px;
        }

        .uptime {
            width: 25%;
        }

        .card-container {
            height: 5em;
            width: 8em;
        }
    }
`;

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    
    useEffect(() => {
        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleAboutMachim();
            }
        }

        window.addEventListener("resize", handleAboutMachim);
    }, []);

    return (
        <div>
            <TopBar />
            <MoblieMachim data-aos="fade-up">
                        <div id="home" className="body">
                        <h1 className="hello-world">Machim Help</h1>
                        <div className="space"></div>

                        <div className="center">
                            <button
                                className="join"
                                onClick={() =>
                                    window.open("https://discord.gg/ShqKtwyjgy", "_blank")
                                }
                            >
                                Support Server
                            </button>
                            <button
                                className="join"
                                onClick={() =>
                                    window.open(
                                        "https://discord.com/oauth2/authorize?client_id=869998026083680336&permissions=8&scope=bot%20applications.commands",
                                        "_blank"
                                    )
                                }
                            >
                                Invite Bot
                            </button>
                        </div>
                    </div>

                    <div id="AboutMe" className="body">
                            <h1 id="AboutMachim" className="about-me">
                                What is Machim?
                            </h1>
                            <p className="about-machim">
                                <strong>.마침이</strong>는 <strong>Kinn</strong>이 개발한
                                Discord Bot 입니다. <br />
                                <strong>.마침이</strong>는 당신의 Discord Server를{" "}
                                <strong>관리</strong>할 수 있으며, <br />
                                <strong>유틸리티</strong> 기능 또한 있어 최고의 Discord Bot
                                사용 경험을 제공합니다.
                                <br />
                                다재다능한 Discord Bot, <strong>.마침이</strong>를 지금
                                당신의 서버에서 사용해보세요!
                            </p>
                    </div>

                    <h2 id="Manage" className="list">
                                MANAGE
                            </h2>
                            <div className="container">
                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img src="img/clean.png" className="card-img" />
                                            <span className="card-title">
                                                <strong>청소</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /clean (숫자) ]</strong> <br />
                                            (으)로 사용이 가능하며, 해당 메시지를 제외한
                                            <br />
                                            (숫자)만큼의 메시지가 삭제됩니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img src="img/slow.png" className="card-img" />
                                            <span className="card-title">
                                                <strong>슬로우</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /slow (숫자) ]</strong> <br />
                                            (으)로 사용이 가능하며, (숫자)초 만큼
                                            <br />
                                            채널에 슬로우가 적용됩니다!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 id="Utility" className="list">
                                UTILITY
                            </h2>
                            <div className="container">
                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img src="img/help.png" className="card-img" />
                                            <span className="card-title">
                                                <strong>도움말</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /help ]</strong> <br />
                                            (으)로 사용이 가능하며,
                                            <strong>.마침이</strong> 봇의 도움말이
                                            출력됩니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img src="img/ping.png" className="card-img" />
                                            <span className="card-title">
                                                <strong>핑</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /ping ]</strong> <br />
                                            (으)로 사용이 가능하며, 봇의 latency(반응속도)를
                                            출력합니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img
                                                src="img/information.png"
                                                className="card-img"
                                            />
                                            <span className="card-title">
                                                <strong>정보</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /info ]</strong> <br />
                                            (으)로 사용이 가능하며, 이름과 태그, ID, 서버
                                            닉네임, 프로필 사진, 가입일 등 입력한 유저의
                                            정보를 출력합니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img
                                                src="img/support.png"
                                                className="card-img"
                                            />
                                            <span className="card-title">
                                                <strong>서포트</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /support ]</strong> <br />
                                            (으)로 사용이 가능하며,
                                            <strong>.마침이</strong> 봇의 공식 웹과 공식
                                            서버, <br />봇 초대 링크 등을 출력합니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img src="img/timer.png" className="card-img" />
                                            <span className="card-title">
                                                <strong>타이머</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /timer (숫자)]</strong> <br />
                                            (으)로 사용이 가능하며, 입력한 시간만큼 지난 뒤
                                            맨션하여 알려줍니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img
                                                src="img/uptime.png"
                                                className="card-img uptime"
                                            />
                                            <span className="card-title">
                                                <strong>업타임</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /uptime ]</strong> <br />
                                            (으)로 사용이 가능하며,
                                            <strong>.마침이</strong> 봇이 가동된 시간을
                                            출력합니다!
                                        </div>
                                    </div>
                                </div>

                                <div className="spec">
                                    <div className="card-container">
                                        <div>
                                            <img
                                                src="img/weather.png"
                                                className="card-img"
                                            />
                                            <span className="card-title">
                                                <strong>날씨</strong>
                                            </span>
                                        </div>
                                        <div className="card-text">
                                            <strong>[ /weather (지역명) ]</strong> <br />
                                            (으)로 사용이 가능하며, 입력된 지역의 날씨를
                                            OpenWeather API를 활용하여 검색 후 출력합니다!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h1 id="Support" className="footer">
                                <br />
                                <br />
                                다재다능한 <strong>.마침이</strong> 봇을 <br />
                                당신의 서버에서 사용해보세요!
                            </h1>

                            <div className="center">
                                <button
                                    className="join"
                                    onClick={() =>
                                        window.open(
                                            "https://discord.gg/ShqKtwyjgy",
                                            "_blank"
                                        )
                                    }
                                >
                                    Support Server
                                </button>
                                <button
                                    className="join"
                                    onClick={() =>
                                        window.open(
                                            "https://discord.com/oauth2/authorize?client_id=869998026083680336&permissions=8&scope=bot%20applications.commands",
                                            "_blank"
                                        )
                                    }
                                >
                                    Invite Bot
                                </button>
                            </div>

        </MoblieMachim>
            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
