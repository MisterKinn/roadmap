import "../../styles/machim.css";
import styled from "styled-components";

const MobileManage = styled.div`
    @media only screen and (max-width: 800px) {
        .hello-world {
            font-size: 80px;
        }

        .card-container {
            height: 5em;
            width: 8em;
        }
    }
`;

function Manage() {
    return (
        <div className="body">
            <MobileManage>
                <h2 id="Manage" className="list">
                    MANAGE
                </h2>
                <div className="container">
                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img src="img/clean.png" className="card-img" />
                                <span className="card-title">
                                    <strong>청소</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /clean (숫자) ]</strong> <br />
                                (으)로 사용이 가능하며, 해당 메시지를 제외한
                                <br />
                                (숫자)만큼의 메시지가 삭제됩니다!
                            </div>
                        </div>
                    </div>

                    <div className="spec">
                        <div className="card-container">
                            <div>
                                <img src="img/slow.png" className="card-img" />
                                <span className="card-title">
                                    <strong>슬로우</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>[ /slow (숫자) ]</strong> <br />
                                (으)로 사용이 가능하며, (숫자)초 만큼
                                <br />
                                채널에 슬로우가 적용됩니다!
                            </div>
                        </div>
                    </div>
                </div>
            </MobileManage>
        </div>
    );
}

export default Manage;
