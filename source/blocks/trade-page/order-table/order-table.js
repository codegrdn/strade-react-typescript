import ready from "Utils/documentReady.js";

ready(function(){
    let  timeRange = document.querySelectorAll(".order-table__time-range-item");
    timeRange.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".order-table__time-range-item--active").classList.remove("order-table__time-range-item--active");
            this.classList.add("order-table__time-range-item--active")
        });
    });

    let  orderTableType = document.querySelectorAll(".order-table__type-item");
    orderTableType.forEach(element => {
        element.addEventListener("click", function(){
            document.querySelector(".order-table__type-item--active").classList.remove("order-table__type-item--active");
            this.classList.add("order-table__type-item--active")
        });
    });

});
