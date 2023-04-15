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

//tea Quiz

function teaQuiz(){
    var x = document.getElementById("sweetness").value;
    var y = document.getElementById("floral").value;
    var z = document.getElementById("milk").value;
    document.getElementById("quiz-form").style.display= "none";
    document.getElementById("quiz-title").style.display= "none";

    if (z == "Yes"){

    }
    


}