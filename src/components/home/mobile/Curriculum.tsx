function Curriculum() {
    return (
        <div id="curriculum">
            <h2 className="introduce" data-aos="fade-up">
                커리큘럼
            </h2>
            <div data-aos="fade-up">
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
                                    <strong> 웹 개발 기초</strong>
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
                </div>

                <div className="container">
                    <div className="spec">
                        <div className="card-container spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/js.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 프론트엔드 기초</strong>
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
                                    <strong> 프론트엔드 심화</strong>
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
                </div>
                
                <div className="container">
                    <div className="spec">
                        <div className="card-container spec2">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/Nextjs.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 웹개발 마스터</strong>
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
            </div>
        </div>
    )
}

export default Curriculum;