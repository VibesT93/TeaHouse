function hideTea() {
    document.getElementById("teaGrid").style.display = "none";
    document.getElementById("accessoriesGrid").style.display="flex";

}

function hideAccessories() {
    document.getElementById("accessoriesGrid").style.display = "none";
    document.getElementById("teaGrid").style.display="flex";
}

function hideNone(){
    document.getElementById("accessoriesGrid").style.display = "flex";
    document.getElementById("teaGrid").style.display="flex";
}