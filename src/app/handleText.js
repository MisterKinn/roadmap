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
    const RoadMapElement = document.querySelector(".roadmap-element");

    if (window.innerWidth < 850) {
        ileonangElement.innerHTML =
            "Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.";
        qrElement.innerHTML =
            "Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.";
        converterElement.innerHTML =
            "Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.";
        RoadMapElement.innerHTML =
            "Operating <strong>RoadMap</strong>, which is<br />Web Club of my high school.";
    }
}

function handleExperience() {
    const highthonElement = document.querySelector(".highthon-element");

    if (window.innerWidth < 850) {
        highthonElement.innerHTML =
            "Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>, which is hackathon<br />of high school student.";
    }
}

function handleAboutMachim() {
    const aboutMachimElement = document.querySelector(".about-machim");

    if (window.innerWidth < 850) {
        aboutMachimElement.innerHTML =
            "<strong>.마침이</strong>는 <strong>Kinn</strong>이 개발한<br />Discord Bot 입니다. <br /> <strong>.마침이</strong>는 당신의 Discord<br />Server를 <strong>관리</strong>할 수 있으며, <br /> <strong>유틸리티</strong> 기능 또한 있어 최고의<br />Discord Bot 사용 경험을 제공합니다. <br /> 다재다능한 Discord Bot, <strong>.마침이</strong>를<br />지금 당신의 서버에서 사용해보세요!";
    }
}

function handleKjs() {
    const aboutMeElement = document.querySelector(".about-me");

    if (window.innerWidth < 850) {
        aboutMeElement.innerHTML =
            "저는 <strong>김진성</strong>이고, 학생 <strong>Prouct<br />Manager</strong>입니다. <br /> 저는 미래 세상의 패러다임에<br />혁신을 주는 프로덕트를 만들 것이고, <br />제 프로덕트를 발전시키기 위해<br />많은 노력을 기울이고 있습니다.";
    }
}

export {
    handleAboutMe,
    handlePortfolio,
    handleExperience,
    handleAboutMachim,
    handleKjs,
};
