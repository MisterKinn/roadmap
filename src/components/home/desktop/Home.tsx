"use client";
import { useState, useEffect } from "react";
import "@/styles/desktop/home.css";

function Home() {
    const [brightness, setBrightness] = useState(0.4);

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                const scrollPosition = window.scrollY;
                const homeHeight = homeElement.offsetHeight + 5000;

                const newBrightness = Math.max(
                    0.4 - scrollPosition / homeHeight,
                    0
                );
                setBrightness(newBrightness);
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
                    style={{ filter: `brightness(${brightness})` }}
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

                <div className="text-container2">
                    <section className="section">
                        <div className="section-content" data-aos="fade-up">
                            <p>
                                웹 개발은 상상을 현실로 만들어내는 과정입니다.
                                <br />
                                머리속에만 가지고 있던 멋진 아이디어를 웹 개발을
                                통해 현실로 만들고,
                                <br />
                                그 결과를 다른 사람들과 공유하면 어떨까요?
                                <br />
                                웹 개발에서 창작과 성장의 즐거움을 느낄 수
                                있으면 어떨까요?
                                <br />
                                <br />
                                이곳에 모인 사람들은 현실화의 즐거움을 경험하고
                                성장의 기쁨을 만끽하며
                                <br />웹 개발을 통해 새로운 역사를 만들고
                                있습니다.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="img-container" data-aos="fade-up">
                    <img
                        loading="lazy"
                        src="https://todaylunch.vercel.app/img/arrow.png"
                        className="arrow"
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;