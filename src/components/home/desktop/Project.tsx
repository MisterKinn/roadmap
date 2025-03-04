function Project() {
    return (
        <div id="project">
            <h2 className="introduce" data-aos="flip-left">
                프로젝트
            </h2>
            <p className="intro-text" data-aos="flip-left">
                <span className="white">유능한 부원</span>들의{" "}
                <span className="white">상상력</span>으로 나온 프로젝트들입니다.
                <br />
                카드를 누르면 해당 프로젝트로{" "}
                <span className="white">이동</span>합니다.
            </p>
            <div className="container" data-aos="fade">
                <a
                    href="/insta-hack"
                    target="_blank"
                    title="인스타그램 해킹 방지 캠페인"
                >
                    <div className="card-container" data-aos="slide-right">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    인스타그램 해킹 방지 캠페인
                                </span>
                            </div>
                            <div className="card-text">
                                <span className="white">인스타그램 계정</span>의{" "}
                                <span className="white">해킹 방지</span> 및
                                <br />
                                <span className="white">해킹 시 대처 방법</span>
                                에 관해 설명합니다.
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://kinn-kr.vercel.app/qr"
                    target="_blank"
                    title="QR Crafter"
                >
                    <div className="card-container" data-aos="slide-left">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/link.png"
                                    className="card-img"
                                />
                                <span className="card-title">QR Crafter</span>
                            </div>
                            <div className="card-text">
                                <span className="white">사용자의 입력</span>에
                                따라 <span className="white">실시간</span>으로
                                <br />
                                <span className="white">QR 코드</span>를
                                생성합니다.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Project;
