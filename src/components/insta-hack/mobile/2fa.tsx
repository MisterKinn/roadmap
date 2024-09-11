import "@/styles/insta-hack/mobile/content.css";

export default function twofa() {
    return (
        <div>
            <h1 className="mobile-title" data-aos="fade-up">
                2단계 인증 활성화
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
                    - "2단계 인증"을 누르고 2단계 인증을
                    <br />
                    설정하려는 계정을 선택합니다.
                    <br />
                    - Google Authenticator와 같은 인증 앱,
                    <br />
                    문자 메시지, WhatsApp 중 하나를
                    <br />
                    선택하여 설정합니다.
                    <br />
                    (인증 앱 사용을 권장합니다)
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
                    - "2단계 인증"을 클릭하고
                    <br />
                    비밀번호를 변경하려는 계정을 선택합니다.
                    <br />
                    - Google Authenticator와 같은 인증 앱,
                    <br />
                    문자 메시지, WhatsApp 중<br />
                    하나를 선택하여 설정합니다.
                    <br />
                    (인증 앱 사용을 권장합니다)
                    <br />ㅤ
                </h2>
            </div>
        </div>
    );
}
