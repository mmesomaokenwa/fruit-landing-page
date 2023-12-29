window.onload = function () {
    const menuBtn = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector(".mobile-nav");
    const fadeInLeft = document.querySelectorAll('.fade-in-left');
    const scaleInBottom = document.querySelectorAll('.scale-in-bottom');
    const scaleInCenter = document.querySelectorAll('.scale-in-center');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    })
    
    function isInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (rect.bottom > 0 && rect.top < window.innerHeight);
    }

    function handleScroll(animation) {
        animation.forEach((element) => {
            let inview = isInViewport(element);
            if (inview) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        })
    }

    handleScroll(fadeInLeft);
    handleScroll(scaleInBottom);
    handleScroll(scaleInCenter);

    window.addEventListener('scroll', () => handleScroll(fadeInLeft));
    window.addEventListener('scroll', () => handleScroll(scaleInBottom));
    window.addEventListener('scroll', () => handleScroll(scaleInCenter));

}
