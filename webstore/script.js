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
    var x = document.getElementById("sweetness");
    var y = document.getElementById("floral");
    var z = document.getElementById("milk");
    document.getElementById("quiz-form").style.display= "none";
    document.getElementById("quiz-title").style.display= "none";

    if (z.checked == true){
        document.getElementByClassName("newText").innerHTML = "We would suggest a highly oxidised tea. Such as an Irish Black Tea or Ceylon Black";
    }
    else if (x.checked == true && y.checked == true){
        document.getElementByClassName("newText").innerHTML = "We would suggest a tea made with flowers and herbs. Such as an Hibiscus Tea or Apple Fruit Tea";
    }
    else if (x.checked == false && y.checked == true){
        document.getElementByClassName("newText").innerHTML = "We would suggest a tea made with a strong herbal taste. Such as an Nettle Tea or Wellness Tea";
    }
    else {
        document.getElementByClassName("newText").innerHTML = "We would suggest a natural processed tea. Such as our Oolong tea";
    }
    
}