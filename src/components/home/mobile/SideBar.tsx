"use client";
import { openMenu, closeMenu } from "@/app/sidebar";

function Sidebar() {
    return (
        <div id="sidebar">
            <div className="menu-container">
                <img
                    src="img/hambuger-bar.png"
                    alt="메뉴 열기"
                    className="openbtn"
                    onClick={openMenu}
                />
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
            </div>
        </div>
    );
}

export default Sidebar;
