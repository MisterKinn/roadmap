function Home() {
    return (
        <div id="home">
            <header className="header">
                <img src="img/gmsh-mobile.png" alt="GMSH RoadMap" className="header-img" />
                <div className="text-container">
                    <div data-aos="fade-up">
                        <h1 className="mobile-title">
                            당신도 무언가를
                            <br />
                            상상해본 적이 있나요?
                        </h1>
                        <h2 className="mobile-sub-title">
                            우리는 상상을 현실로 구현합니다.
                            <br />
                            <strong>RoadMap</strong>은 교내 유일
                            <br />
                            웹 개발 동아리입니다.
                            <br />
                            <strong>RoadMap</strong>과 함께라면
                            <br />
                            당신의 상상은 현실이 됩니다.
                        </h2>
                        <a
                            href="https://tally.so/r/meedxq"
                            target="_blank"
                            title="RoadMap 지원하기"
                        >
                            <button className="join">
                                동아리 지원하기
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;