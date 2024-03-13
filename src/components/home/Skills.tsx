import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import styled from "styled-components";

const MobileList = styled.div`
    @media only screen and (max-width: 800px) {
        .list {
            font-size: 2.7em;
            margin-left: 0.75em;
        }
    }
`;

function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="Skills" className="body">
            <MobileList data-aos="fade-up">
                <h2 className="list">Skills</h2>
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
                        <div className="card-container spec2">
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
                        <div className="card-container spec2">
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
                        <div className="card-container spec2">
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
                        <div className="card-container spec2">
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
            </MobileList>
        </div>
    );
}

export default Skills;
