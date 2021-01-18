const categoryList = document.querySelectorAll(".profile__category"),
    contentList = document.querySelectorAll(".category__content"),
    btnList = document.querySelectorAll(".category__btn");


function handle_icon(btn) {
    btn.classList.toggle("fa-chevron-down");
    btn.classList.toggle("fa-chevron-up");
}

function handle_content(btn, content) {
    const isUp = btn.classList.contains("fa-chevron-up");
    if (isUp) {
        content.classList.remove("drop-down");
        content.classList.add("shut-up");
    }
    else {
        content.classList.remove("shut-up");
        content.classList.add("drop-down");
    }

    content.classList.toggle("shut-up");
    content.classList.toggle("drop-down");
}

function handleClick(event) {
    const content = event.target.parentNode.parentNode.childNodes[3]
    const btn = event.target;
    handle_icon(btn);
    handle_content(btn, content);

}

Array.from(btnList).forEach(function (btnItem) {
    btnItem.addEventListener("click", handleClick);
})


