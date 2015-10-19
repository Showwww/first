function shoot(){
	
	document.getElementById("bullet").style.visibility = "visible";
	

	for(i = 0; i < 100; i++){
		setTimeout(function(){ changeStyle(); }, 100);
	}
	
	
	
	
}
function changeStyle(){
	var elem1 = document.getElementById("bullet");
	var style = window.getComputedStyle(elem1, null).getPropertyValue("left");
	var pos = parseInt(style);
	pos = pos + 10;
	document.getElementById("bullet").style.left = pos.toString() + "px";
	
}