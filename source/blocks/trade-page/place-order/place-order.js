import ready from "Utils/documentReady.js";
import BVSelect from '../../common/select/select';

ready(function(){
    initSelect('#select-limit');
    initSelect('#select-limit-sale');

    let  placeOrderBtnTab = document.querySelectorAll(".place-order__btn-tab");
    placeOrderBtnTab.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".place-order__content--show").classList.remove("place-order__content--show");
            document.querySelector("[data-content='" + this.dataset.index + "']").classList.add("place-order__content--show");
            document.querySelector(".place-order__btn-tab--active").classList.remove("place-order__btn-tab--active");
            this.classList.add("place-order__btn-tab--active");
        });
    });

    let  placeOrderTab = document.querySelectorAll(".place-order__order-tab");
    placeOrderTab.forEach(element => {
        element.addEventListener("click", function(){
            let elemList = element.closest(".place-order__order-tab-list");
            elemList.querySelector(".place-order__order-tab--active").classList.remove("place-order__order-tab--active");
            this.classList.add("place-order__order-tab--active")
        });
    });

    let rangeSlide = document.querySelectorAll('.range-slide');

    rangeSlide.forEach(element => {
        element.addEventListener("click", function() {
            changeRangeValue(element);
        });
        element.addEventListener("touchstart", function() {
            changeRangeValue(element);
        });
        element.addEventListener("touchmove", function() {
            changeRangeValue(element);
        });
        element.addEventListener("touchend", function() {
            changeRangeValue(element);
        });
    });

    function changeRangeValue(element) {
        if (element.value == 1) {
            element.previousElementSibling.style.width="0";
            element.nextElementSibling.style.left="-5px";
        };
        if (element.value == 2) {
            element.nextElementSibling.style.left="calc(25% - 10px)";
            element.previousElementSibling.style.width="calc(25% - 10px)";
        };
        if (element.value == 3) {
            element.nextElementSibling.style.left="calc(50% - 10px)";
            element.previousElementSibling.style.width="calc(50% - 10px)";
        };
        if (element.value == 4) {
            element.nextElementSibling.style.left="calc(75% - 10px)";
            element.previousElementSibling.style.width="calc(75% - 10px)";
        };
        if (element.value == 5) {
            element.nextElementSibling.style.left="calc(100% - 10px)";
            element.previousElementSibling.style.width="calc(100% - 10px)";
        };
    }

    function initSelect(id) {
        new BVSelect({
            selector: id,
            width: "100%",
            searchbox: false,
            offset: true,
            placeholder: "Price",
            search_placeholder: "Search...",
            search_autofocus: true,
            breakpoint: 300
        });
    }
});

