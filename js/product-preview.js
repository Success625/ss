const sidebar = document.querySelector(".sidebar");
const searchBar = document.querySelector(".searchbar");
const openSideNavBtn = document.querySelector("#nav-open");
const closeSideNavBtn = document.querySelector("#nav-close");
const searchbarOpenBtn = document.querySelector(".searchbar-btn");
const searchbarCloseBtn = document.querySelector(".nav-b");

const sidebarToggle = () => {
    sidebar.classList.toggle("active");
}

const searchbarToggle = () => {
    searchBar.classList.toggle("active");
}

searchbarOpenBtn.addEventListener('click', searchbarToggle);
searchbarCloseBtn.addEventListener('click', searchbarToggle);
openSideNavBtn.addEventListener('click', sidebarToggle);
closeSideNavBtn.addEventListener('click', sidebarToggle);