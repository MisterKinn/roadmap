"use client";
import { openMenu, closeMenu } from "@/app/sidebar";
import "@/styles/home/mobile/sidebar.css";

function Sidebar() {
    return (
        <div id="sidebar">
            <div className="row-align">
                <img
                    src="img/hambuger-bar.png"
                    alt="메뉴 열기"
                    className="menu-container openbtn"
                    onClick={openMenu}
                />

                <a
                    href="https://gmsh.kr/insta-hack"
                    title="인스타그램 해킹 방지 캠페인"
                >
                    <img
                        src="img/insta-hack/logo.png"
                        loading="lazy"
                        alt="RoadMap X Devques"
                        className="mobile-logo"
                    />
                </a>
            </div>

            <div className="sidebar">
                <div className="sidebar-content">
                    <a className="closebtn" onClick={closeMenu}>
                        <img
                            src="img/sidebar-close.png"
                            alt="CloseBtn"
                            className="close-img"
                        />
                    </a>
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
            </div>
        </div>
    );
}

export default Sidebar;
