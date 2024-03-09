import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import { handleAboutMe } from "../../app/handleText.js";
import styled from "styled-components";

const MobileAboutMe = styled.div`
    @media only screen and (max-width: 800px) {
        .aboutme-text {
            font-size: 20px;
        }
    }
`;

function AboutMe() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        handleAboutMe();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleAboutMe();
            }
        }
        window.addEventListener("resize", handleAboutMe);

        return () => {
            window.removeEventListener("resize", handleAboutMe);
        };
    });

    return (
        <div id="AboutMe" className="body">
            <MobileAboutMe data-aos="fade-up">
                <h1 className="AboutMe">About Me</h1>
                <p className="aboutme-text">
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
            </MobileAboutMe>
        </div>
    );
}

export default AboutMe;
