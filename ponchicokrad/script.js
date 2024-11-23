let div = document.querySelector("#no");
let wrapper = document.querySelector(".wrapper");
let countP = document.querySelector(".count-p");
let img = document.querySelector(".img-donut");

let count = 0;
let i = 1;
let imgArr = ["donut-1.png", "donut-2.png", "donut-3.png", "donut-4.png", "donut-5.png"]

function changePosition() {

    let maxLeft = wrapper.clientWidth - div.clientWidth;
    let maxTop = wrapper.clientHeight - div.clientHeight;

    let newX = maxLeft * Math.random();
    let newY = maxTop * Math.random();

    div.style.top = newY + "px";
    div.style.left = newX + "px";

    div.style.width = div.clientWidth + 10 + "px";
    if (div.clientWidth >= (wrapper.clientWidth - 50) || div.clientHeight >= (wrapper.clientHeight - 50)) {
        count++;
        div.style.width = "50px";
        countP.innerHTML = count;
        img.src = imgArr[i]
        i++;
        if (i >= imgArr.length) {
            i = 0;
        }
    }
}
div.onpointerenter = function () {
    changePosition();
}
