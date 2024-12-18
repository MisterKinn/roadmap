function Profile() {
    return (
        <div id="profile">
            <h2 className="introduce" data-aos="flip-left">
                문의
            </h2>
            <p className="intro-text" data-aos="flip-left">
                동아리와 관련해서 <span className="white">문의</span>할 사항은
                <br />
                <span className="white">Mail</span>과{" "}
                <span className="white">Instagram</span>으로 문의해주세요.
            </p>

            <div className="container" data-aos="fade">
                <a
                    href="mailto:help@gmsh.kr"
                    target="_blank"
                    title="Mail"
                    className="no-deco"
                >
                    <div className="spec">
                        <div className="card-container2" data-aos="slide-right">
                            <div>
                                <div className="column-center">
                                    <img
                                        loading="lazy"
                                        src="img/mail.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Mail</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    <strong>help@gmsh.kr</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="spec">
                    <a
                        href="https://www.instagram.com/gmsh_roadmap"
                        target="_blank"
                        title="Instagram"
                        className="no-deco"
                    >
                        <div className="card-container2" data-aos="slide-left">
                            <div>
                                <div className="column-center">
                                    <img
                                        loading="lazy"
                                        src="img/instagram.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Instagram</strong>
                                    </span>
                                </div>
                                <div className="card-text">
                                    <strong>gmsh_roadmap</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;
