function Home() {
    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/gmsh.png"
                    alt="GMSH RoadMap"
                    className="header-img"
                />
                <div className="text-container">
                    <div data-aos="fade-up">
                        <h2 className="sub-title">
                            상상을 현실로 만드는 웹 개발 동아리,
                        </h2>
                        <h1 className="title">RoadMap입니다.</h1>
                    </div>
                </div>
                <div className="img-container" data-aos="fade-up">
                    <img
                        loading="lazy"
                        src="https://todaylunch.vercel.app/img/arrow.png"
                        className="arrow"
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;
