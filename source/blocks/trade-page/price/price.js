import ready from "Utils/documentReady.js";
import BVSelect from '../../common/select/select';

ready(function(){

    initSelect('#select-coins');
    initSelect('#select-coins-2');

    function initSelect(id) {
        new BVSelect({
            selector: id,
            width: "100%",
            searchbox: true,
            offset: true,
            placeholder: "Price",
            search_placeholder: "Search...",
            search_autofocus: true,
            breakpoint: 300
        });
    }
});

