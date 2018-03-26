function showDescription(descript){
	$("#description").html("Description: " + descript)
}

function hideDescription(descript){
	$("#description").html(descript)
}

$(window).scroll(function() {
	var pos = $(this).scrollTop();;

	if (pos < 37) {
		document.getElementById("header1").style.display = "block";
		document.getElementById("header2").style.display = "none";
	}

	if (pos > 37) {
		document.getElementById("header1").style.display = "none";
		document.getElementById("header2").style.display = "block";
	}
});

function validate(){
	var phone_length = $("#zip").val();
	if (phone_length < 10000){
		alert("Zip Code not in a valid format.");
		return false;
	}
	if (phone_length > 99999){
		alert("Zip Code is not valid or not in a valid format.");
		return false;
	}
	
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}