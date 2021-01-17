const temp = document.scrollTop;

function myfunc(event) {
    console.log(temp);
}

window.addEventListener("scroll", myfunc);

