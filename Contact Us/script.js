function messageFunction(){
	event.preventDefault();
	var userFirstName=document.getElementById("firstName").value;
	var userSecondName=document.getElementById("secondName").value;
	var userEmail=document.getElementById("email").value;
	var userPhone=document.getElementById("phone").value;
	var userSubject=document.getElementById("subject").value;
	var fN = document.forms["contactUsFormContainer"]["firstName"].value;
	var sN = document.forms["contactUsFormContainer"]["secondName"].value;
	var e = document.forms["contactUsFormContainer"]["email"].value;
	var p = document.forms["contactUsFormContainer"]["phone"].value;
	var s = document.forms["contactUsFormContainer"]["subject"].value;
	var m = document.forms["contactUsFormContainer"]["message"].value;
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
	document.getElementById("contactUsFormContainer").style.display="none";
	document.getElementById("messageReplace").innerHTML=("Hi "+userFirstName+","+"<br/>"+"<br/>"+"thank you for your message regarding "+userSubject+"."+"<br/>"+"<br/>"+"You will be contacted via "
	+userEmail+" and "+userPhone+" by a member of our team."+"<br/>"+"<br/>"+"We'll get back to you as quick as a kettle takes to boil!"+"<br/>"+"<br/>");
	document.getElementById("imageReplace").innerHTML=("<img src=Images/Kettle2.PNG>");
	
}