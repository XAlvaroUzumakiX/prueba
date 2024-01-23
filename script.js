function scrollToTop() {
    scrollToTopAnimation();
}

function scrollToTopAnimation() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopAnimation);
        window.scrollTo(0, currentPosition - currentPosition / 8); 
    }
}

window.onscroll = function () {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function redirectToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
