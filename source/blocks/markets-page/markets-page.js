import ready from "Utils/documentReady.js";
import BVSelect from '../common/select/select';

ready(function(){
    let favouritesIcon= document.querySelectorAll(".col-favourites-icon");
    favouritesIcon.forEach(element => {
        element.addEventListener("click", function(){
            this.classList.toggle("col-favourites-icon--active");
        });
    });


    let  blockchainBtn = document.querySelectorAll(".markets__coin-item");

    blockchainBtn.forEach(element => {
        element.addEventListener("click", function(){
            let elemList = element.closest(".markets__coin-list");
            elemList.querySelector(".markets__coin-item--active").classList.remove("markets__coin-item--active");
            this.classList.add("markets__coin-item--active")
        });
    });

    initSelect('#selectfiltersAlts');
    initSelect('#selectfiltersStable');
    initSelect('#selectfiltersZones');

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
    };
});
