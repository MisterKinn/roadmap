function Profile() {
    return (
        <div id="profile">
            <h2 className="mobile-introduce" data-aos="fade-up">
                문의
            </h2>
            <p className="mobile-intro-text" data-aos="fade-up">
                동아리와 관련해서 <span className="mobile-white">문의</span>할
                사항은
                <br />
                <span className="mobile-white">Mail</span>과{" "}
                <span className="mobile-white">Instagram</span>으로
                문의해주세요.
            </p>
            <div className="mobile-container" data-aos="fade-up">
                <a
                    href="mailto:help@gmsh.kr"
                    target="_blank"
                    title="Mail"
                    className="mobile-no-deco"
                >
                    <div className="mobile-spec">
                        <div className="mobile-card-container2">
                            <div>
                                <div className="mobile-column-center">
                                    <img
                                        loading="lazy"
                                        src="img/mail.png"
                                        className="mobile-card-img"
                                    />
                                    <span className="mobile-card-title">
                                        <strong>Mail</strong>
                                    </span>
                                </div>
                                <div className="mobile-card-text">
                                    <strong>help@gmsh.kr</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>{" "}
            <div className="mobile-container" data-aos="fade-up">
                <div className="mobile-spec">
                    <a
                        href="https://www.instagram.com/gmsh_roadmap"
                        target="_blank"
                        title="Instagram"
                        className="mobile-no-deco"
                    >
                        <div className="mobile-card-container2">
                            <div>
                                <div className="mobile-column-center">
                                    <img
                                        loading="lazy"
                                        src="img/instagram.png"
                                        className="mobile-card-img"
                                    />
                                    <span className="mobile-card-title">
                                        <strong>Instagram</strong>
                                    </span>
                                </div>
                                <div className="mobile-card-text">
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
