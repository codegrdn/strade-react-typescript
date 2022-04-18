import ready from "Utils/documentReady.js";
import BVSelect from '../common/select/select';

ready(function(){
    initSelect('#selectbox-convert');
    initSelect('#selectbox-convert-to');

    function initSelect(id) {
        new BVSelect({
            selector: id,
            width: "100%",
            searchbox: true,
            offset: false,
            placeholder: "Price",
            search_placeholder: "Search...",
            search_autofocus: true,
            breakpoint: 300
        });
    }
});

