import "@/styles/insta-hack/mobile/content.css";

export default function ModifyPW() {
    return (
        <div>
            <h1 className="mobile-title" data-aos="fade-up">
                비밀번호 변경
            </h1>

            <div className="mobile-content">
                <h2 data-aos="fade-up">
                    <span className="mobile-white">1. 모바일 Instagram 앱</span>
                    <br />
                    - 오른쪽 하단의 프로필 사진을 눌러
                    <br />
                    프로필로 이동합니다.
                    <br />- 오른쪽 상단에 있는{" "}
                    <img
                        src="img/hambuger-bar.png"
                        loading="lazy"
                        alt="메뉴 열기"
                        className="mobile-menu-img"
                    />{" "}
                    아이콘을 누릅니다.
                    <br />
                    - "계정 센터"를 누르고
                    <br />
                    "비밀번호 및 보안"을 누릅니다.
                    <br />
                    - "비밀번호 변경"을 누르고
                    <br />
                    비밀번호를 변경하려는 계정을 선택합니다.
                    <br />
                    - 현재 비밀번호 입력 후<br />
                    새로운 비밀번호를 입력합니다.
                    <br />
                    - 새로운 비밀번호를 재입력한 후<br />
                    "비밀번호 변경"을 누릅니다.
                    <br />ㅤ
                </h2>

                <h2 data-aos="fade-up">
                    <span className="mobile-white">2. PC Instagram 웹</span>
                    <br />- 왼쪽 하단에서{" "}
                    <img
                        src="img/hambuger-bar.png"
                        loading="lazy"
                        alt="메뉴 열기"
                        className="mobile-menu-img"
                    />{" "}
                    더 보기를 클릭하고
                    <br />
                    "설정"을 클릭합니다.
                    <br />
                    - "계정 센터"를 클릭하고
                    <br />
                    "비밀번호 및 보안"을 클릭합니다.
                    <br />
                    - "비밀번호 변경"을 클릭하고
                    <br />
                    비밀번호를 변경하려는 계정을 클릭합니다.
                    <br />
                    - 현재 비밀번호를 먼저 입력하고
                    <br />
                    새로운 비밀번호를 입력합니다.
                    <br />- 새로운 비밀번호를 재입력한 후<br />
                    "비밀번호 변경"을 클릭합니다.
                </h2>
            </div>
        </div>
    );
}
