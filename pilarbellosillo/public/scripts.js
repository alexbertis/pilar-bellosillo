window.onscroll = function() {funcProg()};

var navbar, titulo;
var stickyN, stickyT;
document.addEventListener('DOMContentLoaded', function(){
	navbar = document.getElementById("navbar");
	titulo = document.getElementById("titulo");
	stickyN = navbar.offsetTop;
	stickyT = titulo.offsetTop;
})
function funcProg() {
	if (pageYOffset >= stickyN) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
	if (pageYOffset >= stickyT) {
		titulo.style.position = "fixed"
		titulo.style.top = 0
	} else {
		titulo.style.position = "relative"
		titulo.style.top = "50%"
	}
	if(pageYOffset >= stickyT * 1.1 && pageYOffset <= stickyN){
		var k = 1+(stickyT - pageYOffset-64)*2/stickyN
		console.log(k)
		titulo.style.opacity = k
	}
	console.log("Offset: " + pageYOffset)
	console.log("stN: " +stickyN)
	console.log("stT: " +stickyT)
}