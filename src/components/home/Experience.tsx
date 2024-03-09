import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import { handleExperience } from "../../app/handleText.js";
import styled from "styled-components";

const MobileBox = styled.div`
    @media only screen and (max-width: 800px) {
        .list {
            font-size: 2.7em;
            margin-left: 0.75em;
            margin-bottom: 2em;
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
            font-size: 12px;
        }
    }
`;

function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        handleExperience();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleExperience();
            }
        }
        window.addEventListener("resize", handleExperience);

        return () => {
            window.removeEventListener("resize", handleExperience);
        };
    });

    return (
        <div id="Experience" className="body">
            <MobileBox data-aos="fade-up">
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
            </MobileBox>
        </div>
    );
}

export default Experience;
