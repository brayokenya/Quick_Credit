let notify = document.querySelector("#notify");
let notificationMessage = document.querySelector(".notificationMessage");
let largeCard__leftSection__upper__verificationStatus = document.querySelector(".largeCard__leftSection__upper__verificationStatus")
let largeCard__leftSection__upperImg = document.querySelector(".largeCard__leftSection__upper img");
let statusText = document.querySelector(".statusText");
let minorBtnsSuccess = document.querySelector(".minorBtns--red");
let lowertText = document.querySelector(".lowertText");
let notificationCloseBtn  = document.querySelector(".notificationCloseBtn")
let pink = document.querySelector(".pink");
let ctaUpper = document.querySelector("#cta-upper");
let ctaMain = document.querySelector("#cta-main");


notify.addEventListener("click", () => {
    notificationMessage.className = "showNotification";
    largeCard__leftSection__upper__verificationStatus.textContent = "Verified";
    largeCard__leftSection__upper__verificationStatus.setAttribute("style", "color: #03CB4E");
    largeCard__leftSection__upperImg.setAttribute("src", "img/verified-icon.svg");
    statusText.textContent = "Your verification was successful";
    
    minorBtnsSuccess.setAttribute("style", "color: #03CB4E; background: #e6ffef;");
    lowertText.textContent = "You can apply for a loan";
    notificationCloseBtn.setAttribute("style", "color: #CCC; top: 4px; position: absolute; right: 15px; cursor: pointer;");
    ctaUpper.setAttribute("style", "opacity: 1; cursor: pointer; color: #6271D2;");
    ctaUpper.removeAttribute("disabled");
    ctaMain.setAttribute("style", "background: #6271D2; cursor: pointer; color: #FFF;");
    ctaMain.removeAttribute("disabled")
});

notificationCloseBtn.addEventListener("click", () => {
    notificationMessage.classList.remove("showNotification")
    pink.setAttribute("style", "background: #4C5EBB;");
    pink.textContent = "0";
    notificationMessage.className = "notificationMessage";
})

let picture = document.querySelector("#picture");
let realImgHolder = document.querySelector(".realImageUploadHolder");
let imgPlacehoder = document.querySelector(".imgPlacehoder");


picture.addEventListener("change", (e) => {
    realImgHolder.setAttribute("style", "display: block");
    realImgHolder.src = URL.createObjectURL(e.target.files[0]);
    imgPlacehoder.setAttribute("style", "display: none;");
});