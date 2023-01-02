const RIGHT_ELEMENTS = document.querySelectorAll(".right");
const LEFT_ELEMENTS = document.querySelectorAll(".left");

for(let i = 0; i < RIGHT_ELEMENTS.length; i++) {
    RIGHT_ELEMENTS[i].style.width = "100%";
}

for(let i = 0; i < LEFT_ELEMENTS.length; i++) {
    LEFT_ELEMENTS[i].style.width = "100%";
}