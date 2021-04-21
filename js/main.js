import Hst from "./Hst.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(()=>{
    // $("#kg").keypress(function (event) {
    //     if(event.keyCode == 13) { 
    //         var event = new MouseEvent('mousedown'); // create the event listener
    //         $("#province").dispatchEvent(event);
    //     }
    // });

    $("#calculate").click((evt)=>{
        evt.preventDefault();
        const kg = $("#kg").val();
        const province = $("#province").val();
        const oHst = new Hst();
        $("#kgDisplay").html(kg);
        $("#provinceDisplay").html(province);
        $("#cost").html(oHst.calculate(kg, province));
    })
});

