function Promotion() {
    const showAlert = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        alert("현재 부원 모집 기간이 아닙니다.");
    };

    return (
        <div id="promotion">
            <div className="center">
                <h1 data-aos="fade-up">
                    지금도 새로운 역사를
                    <br />
                    만들고 있습니다
                </h1>

                <h2 data-aos="fade-up">
                    RoadMap이 만드는 수많은 혁신의 순간들,
                    <br />
                    당신과 함께 만들고 싶습니다.
                    <br />
                    지금 RoadMap에 합류하세요!
                </h2>

                <a onClick={showAlert} target="_blank" title="RoadMap 지원하기">
                    <button className="join" data-aos="fade-up">
                        <span>동아리 지원하기</span>
                    </button>
                </a>
            </div>

            <div className="container" data-aos="fade-up">
                <a href="https://gmsh.kr/" target="_blank" title="RoadMap">
                    <img
                        src="img/roadmap-banner.png"
                        alt="RoadMap"
                        className="banner"
                        loading="lazy"
                    />
                </a>
            </div>
        </div>
    );
}

export default Promotion;