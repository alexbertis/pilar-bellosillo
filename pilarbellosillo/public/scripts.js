window.onscroll = function() {funcProg()};

var navbar;
var sticky;
document.addEventListener('DOMContentLoaded', function(){
	navbar = document.getElementById("navbar");
	sticky = navbar.offsetTop;
})
function funcProg() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
}