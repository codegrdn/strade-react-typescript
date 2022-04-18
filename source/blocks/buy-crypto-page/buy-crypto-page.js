import ready from "Utils/documentReady.js";
import BVSelect from '../common/select/select';

ready(function(){
    initSelect('#selectbox-convert-credit');
    initSelect('#selectbox-convert-crypto');

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
