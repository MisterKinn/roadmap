import "@/styles/insta-hack/desktop/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <a href="../insta-hack" title="RoadMap X Devques" id="logo">
                    <img
                        src="img/insta-hack/logo.png"
                        className="logo-img"
                        alt="RoadMap&Devques Logo"
                    />
                </a>

                <div className="topnav">
                    <a href="../insta-hack" title="메인 페이지">
                        메인 페이지
                    </a>

                    <a href="../hacked" title="계정 복구">
                        계정 복구
                    </a>

                    <a href="../security-guide" title="보안 가이드">
                        보안 가이드
                    </a>

                    <a href="../modify-pw" title="비밀번호 변경">
                        비밀번호 변경
                    </a>

                    <a href="../2fa" title="2단계 인증 설정">
                        2단계 인증 설정
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
