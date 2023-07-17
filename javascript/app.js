

let plus = document.querySelector(".plus i");
let controllIcons = document.querySelectorAll(".controlls-icons .icon");
let isExpanded = false;

plus.addEventListener("click", () => {
    controllIcons.forEach((icon) => {
        if(!isExpanded) {
            plus.style.transform = "rotate(45deg)";
            icon.style.position = "relative";
        }else {
            plus.style.transform = "rotate(0)";
            icon.style.position = "absolute";
        }
    });
    isExpanded = !isExpanded;
});


let infos = document.querySelectorAll(".info-list li a");
let sections = document.querySelectorAll(".section");

infos.forEach(link => {
    link.addEventListener("click", (e) => {
        infos.forEach(inf => {
            inf.classList.remove("active");
        })
        link.classList.add("active");
        let icon = link.querySelector("i");
        if(icon) {
            icon.classList.add("active")
        }
    });
});


infos.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sections.forEach(sec => {
            sec.classList.remove("active")
        });
        const targetSectionId = link.dataset.info;
        const targetSection = document.querySelector(targetSectionId);
        if(targetSection) {
            targetSection.classList.add("active");
        }
    });
});


let images = document.querySelectorAll(".chat-avatar img");
let overlay;
let popupBox;

images.forEach(img => {
    img.addEventListener("click", (e) => {
        overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);
dropdownInfo
        popupBox = document.createElement("div");
        popupBox.className = "popup";

        let popupImg = document.createElement("img");
        popupImg.src = img.src;

        let popupTitle = document.createElement("p");
        let chatName = img.closest(".chat").querySelector(".chat-name p");
        if(chatName) {
            popupTitle.textContent = chatName.textContent;
        }

        let popupInfo = document.createElement("div");
        popupInfo.classList.add("popup-info");
        popupInfo.innerHTML = `
            <a href="#"><i class="fas fa-comment"></i></a>
            <a href="#"><i class="fa-solid fa-phone"></i></a>
            <a href="#"><i class="fa-solid fa-video"></i></a>
            <a href="#"><i class="fa-solid fa-exclamation exs"></i></a>
        `
        popupBox.appendChild(popupInfo);

        popupBox.appendChild(popupTitle);
        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox);
    });
});

window.addEventListener("scroll", () => {
    if (popupBox) {
        popupBox.remove();
        overlay.remove();
    }
});

//Chat GPT
document.addEventListener("click", (event) => {
    if (popupBox && !popupBox.contains(event.target) && !Array.from(images).includes(event.target)) {
        popupBox.remove();
        overlay.remove();
    }
});
//Chat GPT


let dots = document.querySelector(".dots");
let dropdownInfo = document.querySelector(".dropdown");
dots.addEventListener("click", function() {
    dropdownInfo.style.transform = 'scale(1)';
});
document.addEventListener("click", function(event) {
    if (event.target !== dots && !dropdownInfo.contains(event.target)) {
        dropdownInfo.style.transform = 'scale(0)';
    }
});


let searchIcon = document.querySelector(".nav-list li a i.search");
let searchBox = document.querySelector(".search-box");
let arrowLeft = document.querySelector(".search-bar i");

function remveSearchBox() {
    searchIcon.addEventListener("click", () => {
        searchBox.style.transform = "translateY(0)";
        document.querySelector("#root").style.marginTop = "200px";
    });
    arrowLeft.addEventListener("click", () => {
        searchBox.style.transform = "translateY(-100%)";
        document.querySelector("#root").style.marginTop = "0px";
    });
    window.onscroll = function () {
        searchBox.style.transform = "translateY(-100%)";
        document.querySelector("#root").style.marginTop = "0px";
    }
}
remveSearchBox();

let sunBtn = document.querySelector("i.theme");
let body = document.querySelector("body");
let moon = document.querySelector(".moon");

function themebtns() {
    sunBtn.addEventListener("click", () => {
        sunBtn.style.display = "none";
        moon.style.display = "flex";
        body.classList.add("light-theme");
    });
    moon.addEventListener("click", () => {
        moon.style.display = "none"
        sunBtn.style.display = "flex"
        body.classList.remove("light-theme");
    })
}
themebtns();

let cameraIcon = document.querySelector("i.camera");
let cameraBox = document.querySelector(".camera-box");
let closeIcon = document.querySelector(".camera-box .top i.close");

function handleCamera () {
    cameraIcon.addEventListener('click', () => {
        cameraBox.style.transform = "translateX(0)";
    });
    closeIcon.addEventListener("click", () => {
        cameraBox.style.transform = "translateX(100%)";
    });
}
handleCamera();

let airplaneIcon = document.querySelector("i.airplane");
let airplaneBox = document.querySelector(".airplane-popup");

function handleAirplane() {
    airplaneIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        airplaneBox.style.transform = "translateY(0)";
    });

    document.addEventListener("click", function() {
        airplaneBox.style.transform = "translateY(100%)";
    });

    window.onscroll = function () {
        airplaneBox.style.transform = "translateY(100%)";
    }
}
handleAirplane();

let addAccBtn = document.querySelector("i.add-acc");
let addAccBox = document.querySelector(".add-acc_popup");

function handleAccs() {
    addAccBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addAccBox.style.transform = "scale(1)";
    });
    document.addEventListener("click", () => {
        addAccBox.style.transform = "scale(0)";
    });
    window.onscroll = function() {
        addAccBox.style.transform = "scale(0)";
    }
}
handleAccs();