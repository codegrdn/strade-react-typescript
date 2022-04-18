import ready from "Utils/documentReady.js";
import BVSelect from '../../common/select/select';

ready(function(){
    toggleTradeTab();

    if (window.innerWidth > 767) {
        document.querySelector(".order-book").classList.remove("visually-hidden");
        document.querySelector(".place-order").classList.remove("visually-hidden");
        document.querySelector(".trade-chart").classList.remove("visually-hidden");
        document.querySelector(".trades").classList.remove("visually-hidden");
    }

    let  tradeBtnTab = document.querySelectorAll(".trade__tab-item");
    tradeBtnTab.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".trade__tab-item--active").classList.remove("trade__tab-item--active");
            this.classList.add("trade__tab-item--active");
            toggleTradeTab();
        });
    });

    function toggleTradeTab() {
        if (".trade__tab-item--active") {
            if (document.querySelector(".trade__tab-item--active").dataset.index == 1) {
                document.querySelector(".trade-chart").classList.add("visually-hidden");
                document.querySelector(".trades").classList.add("visually-hidden");
                document.querySelector(".order-book").classList.remove("visually-hidden");
                document.querySelector(".place-order").classList.remove("visually-hidden");
            } else {
                document.querySelector(".trade-chart").classList.remove("visually-hidden");
                document.querySelector(".trades").classList.remove("visually-hidden");
                document.querySelector(".order-book").classList.add("visually-hidden");
                document.querySelector(".place-order").classList.add("visually-hidden");
            }
        }
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            document.querySelector(".order-book").classList.remove("visually-hidden");
            document.querySelector(".place-order").classList.remove("visually-hidden");
            document.querySelector(".trade-chart").classList.remove("visually-hidden");
            document.querySelector(".trades").classList.remove("visually-hidden");
        };

        if (window.innerWidth < 768) {
            toggleTradeTab();
        };

    });


    initSelect('#selectbox-1');

    function initSelect(id) {
        new BVSelect({
            selector: id,
            width: "100%",
            searchbox: false,
            offset: true,
            placeholder: "Select Option",
            search_placeholder: "Search...",
            search_autofocus: true,
            breakpoint: 300
        });
    }
});

