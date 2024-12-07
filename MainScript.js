function Search(){
var sInput = prompt("Search: ");
sInput =sInput.toUpperCase();

 if(sInput ==  "SURFACTANTS" || sInput == "SURFACE"){
        window.location.assign("Surfactants.html");

} else if (sInput == "BLEACHING" || sInput ==  "BLEACH") {

    window.location.assign("Bleaching.html");

} else if (sInput ==  "DISINFECTANT" || sInput ==  "DISINFECT") {
    window.location.assign("Disinfectant.html");

}else if (sInput ==  "DISHWASHING LIQUID") {
    window.location.assign("DishLiquid.html");

}else if (sInput ==  "LAUNDRY CLEANERS") {
    window.location.assign("LaundryCleaners.html");

}else if (sInput ==  "LAUNDRY BLEACH") {
    window.location.assign("LaundryBleach.html");

} else if (sInput ==  "BLEACH POWDER") {
    window.location.assign("BleachPowder.html");

}else if (sInput ==  "LAUNDRY DISINFECTANT") {
    window.location.assign("LaundryDisinfectant.html");

}else if (sInput ==  "WIPES") {
    window.location.assign("Wipes.html");

}else if (sInput ==  "DISINFECTING SPRAY") {
    window.location.assign("D_Spray.html");

}  else {
    alert("Invalid Input");
}


}
