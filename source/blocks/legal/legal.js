import ready from 'Utils/documentReady.js';

ready(function(){
    let sideMenuLink = document.querySelectorAll(".js-anchor-link");

    sideMenuLink.forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            document.querySelector(".side-menu__link--active").classList.remove("side-menu__link--active");
            this.classList.add("side-menu__link--active")
        };
    });

    let anchorLink = document.querySelectorAll('[id*="anchor"]'),
        elemFind = '';

    function sideMenuLinkActive() {
        if (anchorLink[anchorLink.length - 1].offsetTop < window.scrollY) {
            elemFind = anchorLink[anchorLink.length - 1].id;
            document.querySelector(".side-menu__link--active").classList.remove("side-menu__link--active");
            document.querySelector(`a[href*="${anchorLink[anchorLink.length - 1].id}"]`).classList.add("side-menu__link--active");
        };

        anchorLink.forEach(elem => {
            if (elem.offsetTop - window.scrollY < 300 &&  elem.offsetTop - window.scrollY > 0 && elemFind !== elem.id) {
                document.querySelector(".side-menu__link--active").classList.remove("side-menu__link--active");
                elemFind = elem.id;
                document.querySelector(`a[href*="${elem.id}"]`).classList.add("side-menu__link--active");
            }
        });
    }

    if (sideMenuLink.length > 0) {
        window.addEventListener('scroll', sideMenuLinkActive);
    }
});
