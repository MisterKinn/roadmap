import "@/styles/insta-hack/desktop/content.css";

export default function Hacked() {
    return (
        <div>
            <h1 className="title" data-aos="fade-up">
                이미 해킹당한 경우
            </h1>

            <div className="content">
                <h2 data-aos="fade-up">
                    <span className="white">1. 계정 로그인 여부 확인</span>
                    <br />
                    security@mail.instagram.com으로부터 이메일 주소가
                    변경되었다는 내용의 이메일을 받으면
                    <br />
                    해당 메일에서 "내 계정 보호하기"를 선택하여 변경 사항을
                    취소할 수 있습니다.
                    <br />
                    <br />
                    변경 사항이 취소되면 비밀번호 변경, 2단계 보안 설정을 통해
                    계정 보안을 강화하고,
                    <br />
                    변경 사항을 취소할 수 없으면 아래 단계들을 따라주세요.
                    <br />ㅤ
                </h2>

                <h2 data-aos="fade-up">
                    <span className="white">
                        2. Instagram에 로그인 링크 요청하기
                    </span>
                    <br />- Instagram 로그인 화면에서 "비밀번호를 잊으셨나요?"를
                    누릅니다.
                    <br />- 계정과 연결된 정보(사용자 이름, 이메일 주소,
                    전화번호 등)를 입력하고 "로그인 링크 보내기"를 누릅니다.
                    <br />- 이메일 또는 전화번호를 통해 본인임을 인증하고 계정을
                    복구하세요.
                </h2>

                <h2 data-aos="fade-up">
                    <span className="white">
                        3. 로그인 링크 요청이 안 되는 경우
                    </span>
                    <br />-{" "}
                    <a
                        href="https://instagram.com/hacked"
                        target="_blank"
                        title="Instagram 공식 Hacked 페이지"
                    >
                        instagram.com/hacked
                    </a>{" "}
                    페이지에 방문합니다.
                    <br />
                    - "My account was hacked"를 선택합니다.
                    <br />
                    - Instagram 계정 정보를 입력합니다.
                    <br />- 본인확인 후 로그인 링크를 요청할 수 있습니다.
                </h2>
            </div>
        </div>
    );
}
