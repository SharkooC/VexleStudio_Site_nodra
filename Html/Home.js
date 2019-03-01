
function ToTop(){
	
	var Pull_Up_Circle = document.getElementById("Pull_Up_Circle").style;
	var Arrow = document.getElementById("Arrow_To_Top").style;
	
	var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	var WindowSizeY = screen.height;
	
	if(scrollTop <= (WindowSizeY / 2)){
		window.scrollTo(0,WindowSizeY * 10);
		Pull_Up_Circle.top = "80%";
		Pull_Up_Circle.transition= "top 450ms ease-in";
		Arrow.transform= "rotate(225deg)";
	}else if(scrollTop >= (WindowSizeY / 2)){
		window.scrollTo(0,0);
		Pull_Up_Circle.top = "10%";
		Pull_Up_Circle.transition= "top 450ms ease-in";
		Arrow.transform= "rotate(45deg)";
	}
}

function ArrowAngle(){
	
}