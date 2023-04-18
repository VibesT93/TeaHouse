/*function after clicking submit*/
function messageFunction(){
	/*prevents page refresh*/
	event.preventDefault();
	/*collects data inserted into input boxes*/
	var userFirstName=document.getElementById("firstName").value;
	var userSecondName=document.getElementById("secondName").value;
	var userEmail=document.getElementById("email").value;
	var userPhone=document.getElementById("phone").value;
	var userSubject=document.getElementById("subject").value;
	/*variable used to check if form is completed*/
	var fN = document.forms["cFormContainer"]["firstName"].value;
	var sN = document.forms["cFormContainer"]["secondName"].value;
	var e = document.forms["cFormContainer"]["email"].value;
	var p = document.forms["cFormContainer"]["phone"].value;
	var s = document.forms["cFormContainer"]["subject"].value;
	var m = document.forms["cFormContainer"]["message"].value;
	/*if statement to determine if form is complted, will return an error message if so*/
	if (fN == "" || fN == null) {
		alert("First name must be filled out");
		return false;
	}	
	else if (sN == "" || sN == null) {
		alert("Second name must be filled out");
		return false;
	}
	else if (e == "" || e == null) {
		alert("Email must be filled out");
		return false;
	}
	else if (p == "" || p == null) {
		alert("Phone number name must be filled out");
		return false;
	}	
	else if (s == "" || s == null) {
		alert("Subject must be filled out");
		return false;
	}
	else if (m == "" || m == null) {
		alert("Message must be filled out");
		return false;
	}
	/*Message to appear where form is upon form completion*/
	document.getElementById("cFormContainer").style.display="none";
	document.getElementById("messageReplaceOne").innerHTML=("<br/>"+"<br/>"+"Hi "+userFirstName+""+"<br/>"+"<br/>"+"Thank you for your message regarding "+userSubject+"."+"<br/>"+"<br/>"+"You will be contacted via "
	+userEmail+" and "+userPhone+" by a member of our team."+"<br/>"+"<br/>");
	document.getElementById("imageReplace").innerHTML=("<img src=images/kettleboiling.gif>");
	document.getElementById("messageReplaceTwo").innerHTML=("<br/>"+"We'll get back to you as quick as a kettle takes to boil!"+"<br/>"+"<br/>"+"Kind rgeards"+"<br/>"+"<br/>"+"Hearthside Tea");
	/*Scrolls to top of mesage that is displayed upon form completion*/
	const element = document.getElementById("messageReplaceOne");
	element.scrollIntoView();		
}

/*Slide show*/
/*https://www.w3schools.com/howto/howto_js_slideshow.asp*/

let slideIndex = 1;
showSlides(slideIndex);

/*Next/previous controls*/
function plusSlides(n) {
	showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length){
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
