function Project() {
    return (
        <div id="project">
            <h2 className="introduce" data-aos="fade-up">
                프로젝트
            </h2>
            
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="mobile-card-container3 spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="mobile-card-title">
                                    <strong> 인스타그램 계정<br />해킹 방지 캠페인</strong>
                                </span>
                            </div>
                            <div className="mobile-card-text">
                                <strong>
                                    인스타그램 계정의 해킹 방지 및
                                    <br />
                                    해킹 시 대처 방법에 관해 설명합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;