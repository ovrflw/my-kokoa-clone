// const btn_birth = document.querySelector(".category__btn__birthday");
// const btn_recommend = document.querySelector(".category__btn__recommend");

// const content_birth = document.querySelector(".profile__birthday");
// const content_recommend = document.querySelector(".profile__recommend");

// function setHandler() {
//     btn_birth.addEventListener("click", clickBirth);
//     btn_recommend.addEventListener("click", clickRecommend);
// }

// function clickBirth() {
//     const hasClass = btn_birth.classList.contains("fa-chevron-up");
//     if (hasClass) {
//         btn_birth.classList.remove("fa-chevron-up");
//         btn_birth.classList.add("fa-chevron-down");
//         content_birth.classList.add("shut-up");
//     }
//     else {
//         btn_birth.classList.remove("fa-chevron-down");
//         btn_birth.classList.add("fa-chevron-up");
//     }
//     content_birth.classList.toggle("clicked");
// }

// function clickRecommend() {
//     const hasClass = btn_recommend.classList.contains("fa-chevron-up");
//     if (hasClass) {
//         btn_recommend.classList.remove("fa-chevron-up");
//         btn_recommend.classList.add("fa-chevron-down");
//         content_recommend.classList.add("shut-up");
//     }
//     else {
//         btn_recommend.classList.remove("fa-chevron-down");
//         btn_recommend.classList.add("fa-chevron-up");
//     }
//     content_recommend.classList.toggle("clicked");
// }

// setHandler();

const btnList = document.querySelectorAll(".category__btn");
const contentList = document.querySelectorAll(".profile__category");
var height = [];

for (i = 0; i < contentList.length; i++) {
    height.push(contentList[i].clientHeight);
}

function handle_icon(index) {
    btnList[index].classList.toggle("fa-chevron-down");
    btnList[index].classList.toggle("fa-chevron-up");
}

function handle_content(index) {
    const isUp = btnList[index].classList.contains("fa-chevron-up");
    if (isUp) {
        contentList[index].classList.remove("drop-down");
        contentList[index].classList.add("shut-up");
    }
    else {
        contentList[index].classList.remove("shut-up");
        contentList[index].classList.add("drop-down");
    }

    contentList[index].classList.toggle("shut-up");
    contentList[index].classList.toggle("drop-down");
}

function handleClick(index) {
    handle_icon(index);
    handle_content(index);
}

function init() {
    for (i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener("click", handleClick.bind(event, i));
    }
}

init();