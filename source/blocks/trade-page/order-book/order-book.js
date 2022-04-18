import ready from "Utils/documentReady.js";

ready(function(){
    let  timeRange = document.querySelectorAll(".order-book__filter-item");
    timeRange.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".order-book__filter-item--active").classList.remove("order-book__filter-item--active");
            this.classList.add("order-book__filter-item--active")
        });
    });
});
