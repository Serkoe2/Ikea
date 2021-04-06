
const burger = document.querySelector(".btn-burger");
const catalog = document.querySelector(".catalog")
const btnClose = document.querySelector(".btn-close")
const overlay = document.querySelector(".overlay")
const catalogList = document.querySelectorAll(".catalog-list__item")
const subcatalog = document.querySelector(".subcatalog")
const btnReturn = document.querySelector(".btn-return")
const headSubCatalog = subcatalog.querySelector("h3")


const openMenu = () => {
    catalog.classList.add("open");
    overlay.classList.add("active")

}
const closeMenu = () => {
    closeSubMenu()
    catalog.classList.remove("open")
    overlay.classList.remove("active")
}

const openSubMenu = e => {
    e.preventDefault()
    subcatalog.classList.add("subopen")
    headSubCatalog.innerHTML = e.target.innerHTML
}

const closeSubMenu = () => {
    subcatalog.classList.remove("subopen")
}

const setActtiveItem = e => {
    item = e.target.closest(".catalog-list__item")
    prevItem = catalog.querySelector(".active")
    prevItem.classList.remove("active")
    item.classList.add("active")
}

burger.addEventListener("click" , openMenu);
btnClose.addEventListener("click" , closeMenu );
overlay.addEventListener("click" , closeMenu);

catalogList.forEach((value) => {
    value.addEventListener("click",openSubMenu)
    value.addEventListener("click" , setActtiveItem)
});

btnReturn.addEventListener("click" , closeSubMenu)

