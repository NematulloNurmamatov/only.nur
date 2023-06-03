
const showImg = document.querySelector("#show img");
const indicators = document.querySelectorAll(".indicators img");

indicators.forEach((el) => {
    el.addEventListener("click", function () {
        showImg.src = el.src;
    });
});

var numOfPieces = 6 * 6;

var frag = document.createDocumentFragment();

function insertInnerPieces($el, innerPieces) {
    for (var i = 0; i < innerPieces; i++) {
        var $inner = document.createElement("div");
        $inner.classList.add("popup__piece-inner");
        $el.appendChild($inner);
    }
}

for (var i = 1; i <= numOfPieces; i++) {
    var $piece = document.createElement("div");
    $piece.classList.add("popup__piece");

    insertInnerPieces($piece, 3);
    frag.appendChild($piece);
}

document.querySelector(".popup__pieces").appendChild(frag);

var $popupsCont = document.querySelector(".popups-cont");
var $popup = document.querySelector(".popup");
var popupAT = 900;

document.querySelector(".popup-btn").addEventListener("click", function () {
    $popupsCont.classList.add("s--popup-active");
    $popup.classList.add("s--active");
});

function closeHandler() {
    $popupsCont.classList.remove("s--popup-active");
    $popup.classList.remove("s--active");
    $popup.classList.add("s--closed");

    setTimeout(function () {
        $popup.classList.remove("s--closed");
    }, popupAT);
}

document.querySelector(".popup__close").addEventListener("click", closeHandler);

document
    .querySelector(".popups-cont__overlay")
    .addEventListener("click", closeHandler);


const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 250);
});
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$(".owl-carousel-1").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 2,
        },
    },
});

document
    .querySelectorAll(".button")
    .forEach(
        (button) =>
        (button.innerHTML =
            "<div><span>" +
            button.textContent.trim().split("").join("</span><span>") +
            "</span></div>")
    );

$(document).ready(function () {
    $("#dropDown").click(function () {
        $(".drop-down").toggleClass("drop-down--active");
    });
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}

let subMenuu = document.getElementById("subMenuu");
function toggleMenuu() {
    subMenuu.classList.toggle("open-menu");
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (
        (event.keyCode === 123,
            "I" || (event.ctrlKey && event.altKey && event.shiftKey))
    ) {
        event.preventDefault();
    }
});

const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
    tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
    });
    tabs_content.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
        tabContent.style.display = "none";
    });

    const selectedTab = tabs[i];
    const selectedTabContent = tabs_content[i];

    selectedTab.classList.add("active-tab");
    selectedTabContent.classList.add("active-tab");
    selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
        e.preventDefault();
        getActiveTab(i);
    });
}

// const loading = document.getElementById("loading");
// setTimeout(() => {
//   loading.classList.add("loading-none");
// }, 2000);

// Selecting DOM elements
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");

// Setting an initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
    // If we are at the last step
    if (currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if (currentStep === 0) {
        // If we are at the first step
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        // Set the current step to the clicked number link
        currentStep = numIndex;
        // Remove the "active" class from the previously active number link
        document.querySelector(".active").classList.remove("active");
        // Add the "active" class to the clicked number link
        number.classList.add("active");
        updateBtn(); // Update the button states
    });
});

// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Increment or decrement the current step based on the button clicked
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number, numIndex) => {
            // Toggle the "active" class on the number links based on the current step
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn(); // Update the button states
        });
    });
});

// Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the first number link
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn(); // Update the button states
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});

// Add event listener to the "End" button
endBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the last number link
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn(); // Update the button states
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
    notificationToast.classList.add("closed");
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
