// ---------------- tabs --------------------
const tabsBtns = document.querySelectorAll(".tabs__btn button");
const tabsItems = document.querySelectorAll(".tabs__item");

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("btn-active"));
}
function showTabs(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("btn-active");
}

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
}));


// ---------------- links anchors --------------------
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        const id = item.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});