import ready from "Utils/documentReady.js";
import BVSelect from '../common/select/select';
ready(function(){

    let  ordersType = document.querySelectorAll(".orders__type-item");
    ordersType.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".orders__type-item--active").classList.remove("orders__type-item--active");
            document.querySelector(".orders__table-wrap--show").classList.remove("orders__table-wrap--show");
            document.querySelector("[data-content-index='" + this.dataset.index + "']").classList.add("orders__table-wrap--show");
            this.classList.add("orders__type-item--active")
        });
    });

    initSelect('#selectPair-1');
    initSelect('#selectPair-2');

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
