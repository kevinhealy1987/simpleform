function submitUserDetails() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
    document.getElementById("hide").style.display = "none"; // Hides the form element
    alert(name + ", thank you for your details. We will be in touch via " + email + " shortly.");
}