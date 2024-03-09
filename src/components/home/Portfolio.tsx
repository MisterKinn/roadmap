import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import { handlePortfolio } from "../../app/handleText.js";
import styled from "styled-components";

const MobileBox = styled.div`
    @media only screen and (max-width: 800px) {
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

        .card-title {
            font-size: 22px;
        }

        .card-text {
            font-size: 0.45em;
        }

        .converter {
            font-size: 0.6em;
        }

        .card-footer {
            font-size: 14px;
        }
    }
`;

function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        handlePortfolio();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handlePortfolio();
            }
        }
        window.addEventListener("resize", handlePortfolio);

        return () => {
            window.removeEventListener("resize", handlePortfolio);
        };
    });

    return (
        <div id="Portfolio" className="body">
            <MobileBox data-aos="fade-up">
                <h2 className="list">Portfolio</h2>

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
                                    <strong>24. 02. 17~24. 02. 18.</strong>
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
                        href="/promise"
                        target="_blank"
                        title="Promise"
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
                                <span className="promise-element">
                                    Making official Web Page of{" "}
                                    <strong>Promise</strong>
                                    ,
                                    <br />
                                    which is club of my high school.
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        23. 11. 06~
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
            </MobileBox>
        </div>
    );
}

export default Portfolio;
