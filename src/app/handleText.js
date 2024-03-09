function handleAboutMe() {
    const mottoElement = document.querySelector(".motto-text");
    const usaElement = document.querySelector(".usa-element");

    if (window.innerWidth < 850) {
        mottoElement.innerHTML =
            '<strong>"The best way to<br />predict the future is to create it."</strong>';
        usaElement.innerHTML =
            "<strong>the United States<br />of America.</strong>";
    }
}

function handlePortfolio() {
    const ileonangElement = document.querySelector(".ileonang-element");
    const qrElement = document.querySelector(".qr-element");
    const converterElement = document.querySelector(".converter-element");
    const RoadMapElement = document.querySelector(".RoadMap-element");

    if (window.innerWidth < 850) {
        ileonangElement.innerHTML =
            "Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.";
        qrElement.innerHTML =
            "Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.";
        converterElement.innerHTML =
            "Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.";
        RoadMapElement.innerHTML =
            "Making official Web Page of <strong>RoadMap</strong>, which is Web Club<br />of my high school.";
    }
}

function handleExperience() {
    const highthonElement = document.querySelector(".highthon-element");

    if (window.innerWidth < 850) {
        highthonElement.innerHTML =
            "Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.";
    }
}

function handleRoadMap() {
    const titleElement = document.querySelector(".title");
    const subTitleElement = document.querySelector(".sub-title");

    if (window.innerWidth < 850) {
        titleElement.innerHTML =
            "당신도 무언가를<br />상상해본 적이<br />있나요?";
        subTitleElement.innerHTML =
            "우리는 상상을<br />현실로 구현합니다.<br /><strong>RoadMap</strong>은 교내 유일<br />웹 개발 동아리입니다.<br /><strong>RoadMap</strong>과 함께라면<br />당신의 상상은 현실이 됩니다.";
    }
}
// 포폴.tsx에 resize나 load 감지해서 handlePortfolio() 실행시키는 코드 넣기
export { handleAboutMe, handlePortfolio, handleExperience, handleRoadMap };
