window.onscroll = function() {funcProg()};

var nav_items, part_items;


function funcProg() {
	part_items.forEach(element => {
		if(pageYOffset >= element.offsetTop - element.offsetHeight/2){
			nav_items.forEach(nava => {
				nava.classList.remove("actual")
			});
			nav_items[part_items.indexOf(element)].classList.add("actual")
		}
	});
}