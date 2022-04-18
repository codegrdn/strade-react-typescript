import ready from 'Utils/documentReady.js';

ready(function(){
    let  coinItem = document.querySelectorAll(".markets-info__coin-item");

    coinItem.forEach(element => {
    element.addEventListener("click", function(){
        document.querySelector('.markets-info__coin-item--active').classList.remove('markets-info__coin-item--active');
        this.classList.add('markets-info__coin-item--active')
    });
    });
});
