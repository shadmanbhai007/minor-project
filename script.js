function animation() {
    var page1material = document.querySelector("#page1-material");
    var mouse1 = document.querySelector("#mouse")
    page1material.addEventListener("mousemove", (val) => {
        mouse1.style.left = val.x + "px"
        mouse1.style.top = val.y + "px"
    })
    page1material.addEventListener("mouseenter", () => {
        mouse1.style.transform = "scale(1)"
        mouse1.style.opacity = '1';
    })
    page1material.addEventListener("mouseleave", () => {
        mouse1.style.transform = "scale(1)"
        mouse1.style.opacity = '0';
    })
}
animation()

function animation2() {
    var page1material = document.querySelector("#blur");
    var mouse2 = document.querySelector("#mouse2")
    page1material.addEventListener("mousemove", (val) => {
        mouse2.style.left = val.x + "px"
        mouse2.style.top = val.y + "px"
    })
    page1material.addEventListener("mouseenter", () => {
        mouse2.style.transform = "scale(1)"
        mouse2.style.opacity = '1';
    })
    page1material.addEventListener("mouseleave", () => {
        mouse2.style.transform = "scale(1)"
        mouse2.style.opacity = '0';
    })
}
animation2()
