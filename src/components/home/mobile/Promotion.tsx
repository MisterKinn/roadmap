function Promotion() {
    const showAlert = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        alert("현재 부원 모집 기간이 아닙니다.");
    };

    return (
        <div id="promotion">
            <div className="mobile-center">
                <h1 data-aos="slide-up">
                    지금도 새로운 역사를
                    <br />
                    만들고 있습니다
                </h1>

                <h2 data-aos="slide-up">
                    RoadMap이 만드는 수많은 혁신의 순간들,
                    <br />
                    당신과 함께 만들고 싶습니다.
                    <br />
                    지금 RoadMap에 합류하세요!
                </h2>

                <a
                    href="https://tally.so/r/3jkrO6"
                    target="_blank"
                    title="RoadMap 지원하기"
                >
                    <button className="mobile-join" data-aos="slide-up">
                        <span>동아리 지원하기</span>
                    </button>
                </a>
            </div>

            <div className="mobile-container" data-aos="fade-up">
                <a href="https://gmsh.kr/" target="_blank" title="RoadMap">
                    <img
                        src="img/roadmap-banner.png"
                        alt="RoadMap"
                        className="mobile-banner"
                        loading="lazy"
                    />
                </a>
            </div>

            <div className="blank2" />
        </div>
    );
}

export default Promotion;
