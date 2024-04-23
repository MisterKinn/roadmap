function Profile() {
    return (
        <div id="profile">
            <h2 className="introduce" data-aos="fade-up">
                문의
            </h2>

            <div data-aos="fade-up">
                <div className="container">
                    <a
                        href="mailto:help@gmsh.kr"
                        target="_blank"
                        title="Mail"
                        className="no-deco"
                    >
                        <div className="spec">
                            <div className="card-container2">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/mail.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Mail</strong>
                                    </span>
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
                            <div className="card-container2">
                                <div>
                                    <img
                                        loading="lazy"
                                        src="img/instagram.png"
                                        className="card-img"
                                    />
                                    <span className="card-title">
                                        <strong>Instagram</strong>
                                    </span>
                                    <div className="card-text">
                                        <strong>gmsh_roadmap</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;