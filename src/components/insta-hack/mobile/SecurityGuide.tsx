import "@/styles/insta-hack/mobile/content.css";

export default function SecurityGuide() {
    return (
        <div>
            <h1 className="mobile-title" data-aos="fade-up">
                계정 보안 가이드
            </h1>

            <div className="mobile-content">
                <h2 data-aos="fade-up">
                    <span className="mobile-white">
                        1. 강력한 비밀번호 사용
                    </span>
                    <br />
                    보안 수준이 높은 강력한
                    <br />
                    비밀번호를 사용하세요.
                    <br />
                    이름, 생일, 주소, 중요한 다른 사람이나
                    <br />
                    자녀의 이름 등 개인적으로 식별할 수 있는
                    <br />
                    정보를 사용하거나 "12345678"처럼 지나치게
                    <br />
                    일반적인 비밀번호를 사용하지 마세요.
                    <br />
                    <br />
                    다른 계정과 플랫폼에 사용한 적 없는
                    <br />
                    고유한 비밀번호를 선택하세요.
                    <br />
                    다른 계정과 플랫폼에서 사용된
                    <br />
                    비밀번호를 사용하면 Instagram에 연결된
                    <br />
                    다른 플랫폼의 계정까지 함께
                    <br />
                    해킹당할 수 있습니다.
                    <br />
                    <br />
                    반복되지 않는 문자, 숫자, 특수문자를 조합하여
                    <br />
                    6자 이상의 비밀번호를 만드세요.
                    <br />ㅤ
                </h2>

                <h2 data-aos="fade-up">
                    <span className="mobile-white">2. 2단계 인증 활성화</span>
                    <br />
                    Instagram 계정에 2단계 인증을
                    <br />
                    활성화하세요.
                    <br />
                    2단계 인증은 확인되지 않은 기기에서
                    <br />
                    로그인 시도가 있는 경우
                    <br />
                    인증 코드를 요구하여 계정을 보호합니다.
                    <br />
                    <br />
                    2단계 인증을 활성화하는 방법은 <br />
                    <a
                        href="https://gmsh.kr/2fa"
                        target="_blank"
                        title="2단계 인증 활성화 가이드 페이지"
                    >
                        여기
                    </a>
                    에서 확인할 수 있습니다.
                    <br />ㅤ
                </h2>

                <h2 data-aos="fade-up">
                    <span className="mobile-white">
                        3. 주기적인 비밀번호 변경
                    </span>
                    <br />
                    주기적으로 비밀번호를 변경하여
                    <br />더 이상의 해킹을 막습니다.
                </h2>
            </div>
        </div>
    );
}
