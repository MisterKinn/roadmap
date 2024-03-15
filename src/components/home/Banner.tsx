import "../../styles/style.css";
import styled from "styled-components";

const MobileBanner = styled.div`
    @media only screen and (max-width: 800px) {
        .banner {
            height: 6em;
            width: auto;
        }
    }
`;

function Banner() {
    return (
        <div id="banner" className="body">
            <MobileBanner>
                <a href="https://gmsh.kr/" target="_blank" title="RoadMap">
                    <img
                        loading="lazy"
                        src="img/roadmap-banner.png"
                        alt="Kinn's Lounge"
                        className="banner margin10"
                    />
                </a>
            </MobileBanner>
        </div>
    );
}

export default Banner;
