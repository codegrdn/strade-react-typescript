import ready from "Utils/documentReady.js";
import BVSelect from '../../common/select/select';

ready(function(){
    let  transactionsBtn = document.querySelectorAll(".wallet__details-btn");

    transactionsBtn.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".wallet__details-content--show").classList.remove("wallet__details-content--show");
            document.querySelector("[data-content-index='" + this.dataset.index + "']").classList.add("wallet__details-content--show");
            document.querySelector(".wallet__details-btn--active").classList.remove("wallet__details-btn--active");
            this.classList.add("wallet__details-btn--active")
        });
    });


    let  blockchainBtn = document.querySelectorAll(".wallet__details-blockchain-item");

    blockchainBtn.forEach(element => {
        element.addEventListener("click", function(){
            let elemList = element.closest(".wallet__details-blockchain-list");
            elemList.querySelector(".wallet__details-blockchain-item--active").classList.remove("wallet__details-blockchain-item--active");
            this.classList.add("wallet__details-blockchain-item--active")
        });
    });


    let  sidebarElem = document.querySelectorAll(".wallet__sidebar-item");

    sidebarElem.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".wallet__sidebar-item--active").classList.remove("wallet__sidebar-item--active");
            this.classList.add("wallet__sidebar-item--active")
        });
    });

    if ( document.querySelectorAll('[id*="selectAdress"]').length > 0 ) {
        initSelect('#selectAdress');
    }

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
