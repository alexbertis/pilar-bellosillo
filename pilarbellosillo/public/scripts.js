window.onscroll = function() {funcProg()};

var nav_top, nav_info, nav_2, nav_3;
var nav_items, part_items;
document.addEventListener('DOMContentLoaded', function(){
	nav_top = document.getElementById("n_top")
	nav_info = document.getElementById("n_info")
	nav_2 = document.getElementById("n_pt2")
	nav_3 = document.getElementById("n_pt3")
	nav_items = [nav_top, nav_info, nav_2, nav_3]
	part_items = [document.getElementById("top"),document.getElementById("vida"),document.getElementById("vida2"),document.getElementById("vida3")]

})
function funcProg() {
	/*if (pageYOffset >= stickyN) {
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
	console.log("stT: " +stickyT)*/
	part_items.forEach(element => {
		if(pageYOffset >= element.offsetTop){
			nav_items.forEach(nava => {
				nava.classList.remove("actual")
			});
			nav_items[part_items.indexOf(element)].classList.add("actual")
		}
	});
}