function handleRoadMap() {
    const titleElement = document.querySelector(".title");
    const subTitleElement = document.querySelector(".sub-title");
    const aboutMeElement = document.querySelector(".intro-text");

    if (window.innerWidth < 850) {
        titleElement.innerHTML =
            "당신도 무언가를<br />상상해본 적이<br />있나요?";
        subTitleElement.innerHTML =
            "우리는 상상을<br />현실로 구현합니다.<br /><strong>RoadMap</strong>은 교내 유일<br />웹 개발 동아리입니다.<br /><strong>RoadMap</strong>과 함께라면<br />당신의 상상은 현실이 됩니다.";
        aboutMeElement.innerHTML =
            "<strong>RoadMap</strong>은 교내 유일 웹 개발 동아리이며, <br /> 웹 개발을 학습하고 함께 실습하며 <br />웹 개발자로서의 역량을 쌓아나가는 동아리입니다. <br /> <br /> 여러분의 웹 사이트를 만들고 동아리 자체 서버와 <br /> 도메인으로 웹을 호스팅하여 전 세계에서<br />여러분의 웹 페이지에 접속해 마법 같은<br />경험을 할 수 있도록 만듭니다. <br /> <br /> 또한 동아리 내부에서 개인·팀 프로젝트를 통해 <br /> 리더십 및 협업 능력을 향상시키고, <br /> 해커톤과 같은 대회에 참가하여 부원들의 <br /> 실력과 <strong>RoadMap</strong>의 명성을 높입니다.";
    }
}

export { handleRoadMap };
