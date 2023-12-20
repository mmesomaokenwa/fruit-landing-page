window.onload = function () {
    const menuBtn = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector(".mobile-nav");

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    })
}
