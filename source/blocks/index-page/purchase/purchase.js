import ready from 'Utils/documentReady.js';
import BVSelect from '../../common/select/select';

ready(function(){
    let  paymentMethod = document.querySelectorAll(".payment-method__item");

    paymentMethod.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector('.payment-method__item--active').classList.remove('payment-method__item--active');
            this.classList.add('payment-method__item--active')
        });
    });

    initSelect('#selectboxcoin-1');
    initSelect('#selectboxcoin-2');

    function initSelect(id) {
        new BVSelect({
            selector: id,
            width: "100%",
            searchbox: false,
            offset: false,
            placeholder: "Price",
            search_placeholder: "Search...",
            search_autofocus: true,
            breakpoint: 300
        });
    }
});
