function shoot(){
	
	document.getElementById("bullet").style.visibility = "visible";
	
	
	var elem1;
	var style;
	var pos = 0;
	for (var i=0;i<=70;i++) {
	   (function(ind) {
		   setTimeout(function(){changeStyle();}, 50 + (30 * ind));
	   })(i);
	}
	
	
	
}
function changeStyle(){
	
	elem1 = document.getElementById("bullet");
	style = window.getComputedStyle(elem1, null).getPropertyValue("left");
	pos = parseInt(style);
	pos = pos + 20;
	document.getElementById("bullet").style.left = pos.toString() + "px";
	
	
}