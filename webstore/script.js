//hides tea form the products page
function hideTea() {
    document.getElementById("teaGrid").style.display = "none";
    document.getElementById("accessoriesGrid").style.display="flex";

}

//hides accessories from the propducts page
function hideAccessories() {
    document.getElementById("accessoriesGrid").style.display = "none";
    document.getElementById("teaGrid").style.display="flex";
}

//displays all products on the product page
function hideNone(){
    document.getElementById("accessoriesGrid").style.display = "flex";
    document.getElementById("teaGrid").style.display="flex";
}

