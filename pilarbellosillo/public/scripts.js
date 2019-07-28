window.onscroll = function() {funcProg()};

var nav_top, nav_info, nav_2, nav_3, nav_4;
var nav_items, part_items;



document.addEventListener('DOMContentLoaded', function(){
	nav_top = document.getElementById("n_top")
	nav_info = document.getElementById("n_info")
	nav_2 = document.getElementById("n_umofc")
	nav_3 = document.getElementById("n_define")
	nav_4 = document.getElementById("n_cont")
	nav_items = [nav_top, nav_info, nav_2, nav_3, nav_4]
	part_items = [document.getElementById("top"),document.getElementById("vida"),document.getElementById("etapaInter"),document.getElementById("ladefine"),document.getElementById("contacto")]


	var btn = document.getElementById("btInfoPlanesAC")
	var sh = document.getElementById("sh")
	var flechaaarriba = document.createElement("i")
	flechaaarriba.className = "material-icons"
	flechaaarriba.innerText = "expand_less"
	var flechaaabajo = document.createElement("i")
	flechaaabajo.className = "material-icons"
	flechaaabajo.innerText = "expand_more"
	btn.onclick = function() {
		if(sh.style.maxHeight == "0px"){
			sh.style.maxHeight = "800px";
			btn.text = "Menos información"
			btn.appendChild(flechaaarriba)
		}else{
			sh.style.maxHeight = "0px";
			btn.text = "Ver los planes destacados"
			btn.appendChild(flechaaabajo)
		} 
	}
	
})
function funcProg() {
	part_items.forEach(element => {
		if(pageYOffset >= element.offsetTop){
			nav_items.forEach(nava => {
				nava.classList.remove("actual")
			});
			nav_items[part_items.indexOf(element)].classList.add("actual")
		}
	});
}