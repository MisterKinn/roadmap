function Curriculum() {
    return (
        <div id="curriculum">
            <h2 className="mobile-introduce" data-aos="flip-left">
                커리큘럼
            </h2>
            <p className="mobile-intro-text" data-aos="flip-left">
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
                                <span className="white">웹의 작동 방식</span>
                                과 웹의 기본 언어인
                                <br />
                                <span className="white">HTML</span>을
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
                                src="img/css.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                프론트엔드 기초
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                웹 페이지를 예쁘게{" "}
                                <span className="white">디자인</span>하는 언어인
                                <br />
                                <span className="white">CSS</span>를 학습합니다.
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
                                프론트엔드 심화
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                웹 페이지를 <span className="white">동적</span>
                                으로 만들어주는
                                <br />
                                <span className="white">JavaScript</span>을 통해{" "}
                                <span className="white">반응형 웹 페이지</span>
                                를 개발합니다.
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
                                src="img/git.png"
                                className="mobile-card-img"
                            />
                            <span className="mobile-card-title">
                                웹개발 마스터
                            </span>
                        </div>
                        <div className="mobile-card-text">
                            <strong>
                                <span className="white">Git</span>를 통해
                                대기업들이 <span className="white">실무</span>
                                에서 사용하는 방식으로
                                <br />
                                <span className="white">협업</span>하는 방식을
                                학습하고
                                <br />
                                부원들과 <span className="white">
                                    함께
                                </span>{" "}
                                프로젝트를 진행합니다.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
