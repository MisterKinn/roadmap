import "../../styles/machim.css";
import React, { useEffect } from "react";
import { handleAboutMachim } from "../../app/handleText";
import styled from "styled-components";

const MobileAboutMachim = styled.div`
    @media (max-width: 800px) {
        .about-machim {
            font-size: 20px;
        }
    }
`;

function AboutMachim() {
    useEffect(() => {
        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleAboutMachim();
            }
        }

        window.addEventListener("resize", handleAboutMachim);
    }, []);

    return (
        <div id="AboutMe" className="body">
            <MobileAboutMachim>
                <h1 id="AboutMachim" className="about-me">
                    What is Machim?
                </h1>
                <p className="about-machim">
                    <strong>.마침이</strong>는 <strong>Kinn</strong>이 개발한
                    Discord Bot 입니다. <br />
                    <strong>.마침이</strong>는 당신의 Discord Server를{" "}
                    <strong>관리</strong>할 수 있으며, <br />
                    <strong>유틸리티</strong> 기능 또한 있어 최고의 Discord Bot
                    사용 경험을 제공합니다.
                    <br />
                    다재다능한 Discord Bot, <strong>.마침이</strong>를 지금
                    당신의 서버에서 사용해보세요!
                </p>
            </MobileAboutMachim>
        </div>
    );
}

export default AboutMachim;
