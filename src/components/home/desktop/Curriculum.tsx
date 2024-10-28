function Curriculum() {
    return (
        <div id="curriculum">
            <h2 className="introduce" data-aos="fade-up">
                커리큘럼
            </h2>
            <p className="intro-text" data-aos="fade-up">
                <span className="white">체계적인 커리큘럼</span>을 통해
                <br />
                부원들의 <span className="white">웹 개발 역량</span>을
                효율적으로 <span className="white">향상</span>시킵니다.
            </p>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/html.png"
                                    className="card-img"
                                />
                                <span className="card-title">웹 개발 기초</span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    <span className="white">
                                        웹의 작동 방식
                                    </span>
                                    과 웹의 기본 언어인
                                    <br />
                                    <span className="white">HTML</span>,{" "}
                                    <span className="white">CSS</span> 등을
                                    학습합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/js.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    프론트엔드 기초
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    프론트엔드 웹 개발의 기반 언어인
                                    <br />
                                    <span className="white">JavaScript</span>
                                    를 학습하고
                                    <br />
                                    <span className="white">반응형 웹</span>을
                                    만듭니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/React.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    프론트엔드 심화
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    <span className="white">React</span>를 통해
                                    더욱 효율적으로
                                    <br />
                                    웹을 개발하고 유지보수를
                                    <br />
                                    용이하게 만듭니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/Nextjs.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    웹개발 마스터
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    <span className="white">Next.JS</span>를
                                    통해 대기업들이
                                    <br />
                                    <span className="white">실무</span>에서
                                    사용하는 방식으로
                                    <br />
                                    웹을 개발합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
