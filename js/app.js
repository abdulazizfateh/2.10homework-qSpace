const header = document.querySelector(".site-header");
const modeBtn = document.querySelector(".header-nav-mode");
const modeImg = document.querySelector(".header-nav-mode-img");
const footerNextLink = document.querySelector(".footer-next-icon");
const siteLogo = document.querySelector(".site-logo");
const footerSiteLogo = document.querySelector(".footer-site-logo");


window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
        header.style.backgroundColor = "var(--bg)";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        modeImg.src = "./assets/images/nav-mode-night.svg";
        footerNextLink.src = "./assets/images/next-black.svg";
        siteLogo.src = "./assets/images/qSpace-logo.svg";
        footerSiteLogo.src = "./assets/images/qSpace-logo.svg";

    } else {
        modeImg.src = "./assets/images/nav-mode-day.svg";
        footerNextLink.src = "./assets/images/white-next.svg";
        siteLogo.src = "./assets/images/qSpace-logo-dark.svg";
        footerSiteLogo.src = "./assets/images/qSpace-logo-dark.svg";

    }
});


