import "../../styles/machim.css";
import styled from "styled-components";

const MobileUtility = styled.div`
    .uptime {
        width: 15%;
    }

    @media only screen and (max-width: 800px) {
        .hello-world {
            font-size: 80px;
        }

        .uptime {
            width: 25%;
        }

        .card-container {
            height: 5em;
            width: 8em;
        }
    }
`;

function Utility() {
    return (
        <div className="body">
            <MobileUtility>
                <h2 id="Utility" className="list">
                    UTILITY
                </h2>
                <div className="container">
                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img src="img/help.png" className="card-img" />
                                <span className="card-title">
                                    <strong>도움말</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /help ]</strong> <br />
                                (으)로 사용이 가능하며,
                                <strong>.마침이</strong> 봇의 도움말이
                                출력됩니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img src="img/ping.png" className="card-img" />
                                <span className="card-title">
                                    <strong>핑</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /ping ]</strong> <br />
                                (으)로 사용이 가능하며, 봇의 latency(반응속도)를
                                출력합니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img
                                    src="img/information.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>정보</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /info ]</strong> <br />
                                (으)로 사용이 가능하며, 이름과 태그, ID, 서버
                                닉네임, 프로필 사진, 가입일 등 입력한 유저의
                                정보를 출력합니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img
                                    src="img/support.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>서포트</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /support ]</strong> <br />
                                (으)로 사용이 가능하며,
                                <strong>.마침이</strong> 봇의 공식 웹과 공식
                                서버, <br />봇 초대 링크 등을 출력합니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img src="img/timer.png" className="card-img" />
                                <span className="card-title">
                                    <strong>타이머</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /timer (숫자)]</strong> <br />
                                (으)로 사용이 가능하며, 입력한 시간만큼 지난 뒤
                                맨션하여 알려줍니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img
                                    src="img/uptime.png"
                                    className="card-img uptime"
                                />
                                <span className="card-title">
                                    <strong>업타임</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /uptime ]</strong> <br />
                                (으)로 사용이 가능하며,
                                <strong>.마침이</strong> 봇이 가동된 시간을
                                출력합니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img
                                    src="img/weather.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>날씨</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /weather (지역명) ]</strong> <br />
                                (으)로 사용이 가능하며, 입력된 지역의 날씨를
                                OpenWeather API를 활용하여 검색 후 출력합니다!
                            </div>
                        </div>
                    </div>
                </div>
            </MobileUtility>
        </div>
    );
}

export default Utility;
