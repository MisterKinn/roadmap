import "@/styles/insta-hack/desktop/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <a href="../" title="RoadMap" id="logo">
                    <img
                        src="img/roadmap-banner.png"
                        className="roadmap-logo"
                        alt="RoadMap Logo"
                    />
                </a>

                <div className="topnav">
                    <a href="../#home" title="메인 페이지">
                        메인 페이지
                    </a>

                    <a href="../#about" title="동아리 소개">
                        동아리 소개
                    </a>

                    <a href="../#curriculum" title="커리큘럼">
                        커리큘럼
                    </a>

                    <a href="../#project" title="프로젝트">
                        프로젝트
                    </a>

                    <a href="../#profile" title="문의">
                        문의
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
