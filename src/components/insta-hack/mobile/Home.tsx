export default function Home() {
    return (
        <div>
            <h1 className="mobile-title">
                인스타그램 계정
                <br />
                해킹 예방 캠페인
            </h1>

            <div className="mobile-container">
                <a
                    href="../hacked"
                    target="_blank"
                    className="mobile-list"
                    rel="noopener noreferrer"
                >
                    <div className="mobile-card-container red-bg">
                        <div>
                            <img
                                src="img/insta-hack/1.png"
                                alt="이미 해킹당한 경우"
                                loading="lazy"
                            />
                            <span>이미 해킹당한 경우</span>
                        </div>

                        <h4>
                            이미 해킹으로 계정에 접근할 수 없는 경우
                            <br />
                            계정을 복구하는 방법을 알아봅니다.
                        </h4>
                    </div>
                </a>
            </div>

            <div className="mobile-container">
                <a
                    href="../security-guide"
                    target="_blank"
                    className="mobile-list"
                    rel="noopener noreferrer"
                >
                    <div className="mobile-card-container">
                        <div>
                            <img
                                src="img/insta-hack/2.png"
                                alt="보안 가이드"
                                loading="lazy"
                            />
                            <span>보안 가이드</span>
                        </div>
                        <h4>
                            인스타그램 공식 보안 가이드를 통해
                            <br />
                            계정의 보안을 더욱 강화합니다.
                        </h4>
                    </div>
                </a>
            </div>

            <div className="mobile-container">
                <a
                    href="../modify-pw"
                    target="_blank"
                    className="mobile-list"
                    rel="noopener noreferrer"
                >
                    <div className="mobile-card-container">
                        <div>
                            <img
                                src="img/insta-hack/3.png"
                                alt="비밀번호 변경"
                                loading="lazy"
                            />
                            <span>비밀변호 변경</span>
                        </div>
                        <h4>
                            인스타그램 계정 탈취를 예방하기 위해
                            <br />
                            계정의 비밀번호를 변경하는
                            <br />
                            방법을 알아봅니다.
                        </h4>
                    </div>
                </a>
            </div>

            <div className="mobile-container">
                <a
                    href="../2fa"
                    target="_blank"
                    className="mobile-list"
                    rel="noopener noreferrer"
                >
                    <div className="mobile-card-container">
                        <div>
                            <img
                                src="img/insta-hack/4.png"
                                alt="2단계 인증 설정"
                                loading="lazy"
                            />
                            <span>2단계 인증 설정</span>
                        </div>
                        <h4>
                            강력한 계정 보안을 위헤 계정에
                            <br />
                            2단계 인증 시스템을 적용하는
                            <br />
                            방법을 알아봅니다.
                        </h4>
                    </div>
                </a>
            </div>
        </div>
    );
}
