function Project() {
    return (
        <div id="project">
            <h2 className="mobile-introduce" data-aos="fade-up">
                프로젝트
            </h2>
            <p className="mobile-intro-text" data-aos="fade-up">
                <span className="mobile-white">유능한 부원</span>들의{" "}
                <span className="mobile-white">상상력</span>으로 나온
                프로젝트들입니다.
                <br />
                카드를 누르면 해당 프로젝트로{" "}
                <span className="mobile-white">이동</span>합니다.
            </p>
            <div className="mobile-container" data-aos="fade-up">
                <a
                    href="/insta-hack"
                    target="_blank"
                    title="인스타그램 해킹 방지 캠페인"
                >
                    <div className="mobile-card-container">
                        <div>
                            <div className="mobile-column-center">
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="mobile-card-img"
                                />
                                <span className="mobile-card-title">
                                    인스타그램 해킹 방지 캠페인
                                </span>
                            </div>
                            <div className="mobile-card-text">
                                인스타그램 계정의 해킹 방지 및
                                <br />
                                해킹 시 대처 방법에 관해 설명합니다.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="mobile-container" data-aos="fade-up">
                <a
                    href="https://kinn.kr/uxinsight"
                    target="_blank"
                    title="UX Insight"
                >
                    <div className="mobile-card-container">
                        <div>
                            <div className="mobile-column-center">
                                <img
                                    loading="lazy"
                                    src="img/about-2.png"
                                    className="mobile-card-img"
                                />
                                <span className="mobile-card-title">
                                    자유롭게 학습합니다
                                </span>
                            </div>
                            <div className="mobile-card-text">
                                온라인 기반 학습 시스템을 통해
                                <br />
                                때와 장소에 상관없이 언제든지
                                <br />웹 개발 지식을 학습할 수 있습니다.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Project;
