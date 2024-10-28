function Curriculum() {
    return (
        <div id="curriculum">
            <h2 className="mobile-introduce" data-aos="fade-up">
                커리큘럼
            </h2>
            <p className="mobile-intro-text" data-aos="fade-up">
                <span className="mobile-white">체계적인 커리큘럼</span>을 통해
                <br />
                부원들의 <span className="mobile-white">웹 개발 역량</span>을
                효율적으로 <span className="mobile-white">향상</span>시킵니다.
            </p>
            <div className="mobile-container" data-aos="fade-up">
                <div className="mobile-card-container">
                    <div>
                        <div className="mobile-column-center">
                            <img
                                loading="lazy"
                                src="img/html.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                웹 개발 기초
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                <span className="mobile-white">
                                    웹의 작동 방식
                                </span>
                                과 웹의 기본 언어인
                                <br />
                                <span className="mobile-white">HTML</span>,{" "}
                                <span className="mobile-white">CSS</span> 등을
                                학습합니다.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-container" data-aos="fade-up">
                <div className="mobile-card-container">
                    <div>
                        <div className="mobile-column-center">
                            <img
                                loading="lazy"
                                src="img/js.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                프론트엔드 기초
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                프론트엔드 웹 개발의 기반 언어인
                                <br />
                                <span className="mobile-white">JavaScript</span>
                                를 학습하고
                                <br />
                                <span className="mobile-white">반응형 웹</span>
                                을 만듭니다.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-container" data-aos="fade-up">
                <div className="mobile-card-container">
                    <div>
                        <div className="mobile-column-center">
                            <img
                                loading="lazy"
                                src="img/React.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                프론트엔드 심화
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                <span className="mobile-white">React</span>
                                를 통해 더욱 효율적으로
                                <br />
                                웹을 개발하고 유지보수를
                                <br />
                                용이하게 만듭니다.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-container" data-aos="fade-up">
                <div className="mobile-card-container">
                    <div>
                        <div className="mobile-column-center">
                            <img
                                loading="lazy"
                                src="img/Nextjs.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                웹개발 마스터
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                <span className="mobile-white">Next.JS</span>
                                를 통해 대기업들이
                                <br />
                                <span className="mobile-white">실무</span>
                                에서 사용하는 방식으로
                                <br />
                                웹을 개발합니다.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
