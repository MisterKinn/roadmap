import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "../../styles/aos.css";
import styled from "styled-components";

const MobileList = styled.div`
    @media only screen and (max-width: 800px) {
        .list {
            font-size: 2.7em;
            margin-left: 0.75em;
        }
    }
`;

function Profile() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="Profile" className="body">
            <MobileList data-aos="fade-up">
                <h2 id="Profile" className="list">
                    Profile
                </h2>
                <div className="container">
                    <a
                        href="mailto:kinn@kinn.kr"
                        target="_blank"
                        title="Mail"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Mail</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        kinn@kinn.kr
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/kinn__sy/"
                        target="_blank"
                        title="Instagram"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Instagram</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        kinn__sy
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://discord.com/users/602459845534416896/"
                        target="_blank"
                        title="Discord"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/discord.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong>Discord</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        mrkinn
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/MisterKinn/"
                        target="_blank"
                        title="GitHub"
                        className="spec"
                    >
                        <div className="card-container spec3">
                            <div>
                                <img
                                    loading="lazy"
                                    src="img/github.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong>Github</strong>
                                </span>
                                <div className="card-footer">
                                    <strong>
                                        <br />
                                        MisterKinn
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </MobileList>
        </div>
    );
}

export default Profile;
