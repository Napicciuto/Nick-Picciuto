$(function(){
	//alert("JS is working");
	
	function lenPosition(id){
		var dim = {};
		 switch(id){
			case "dmg" :
				dim.pHeight = 135;
				dim.bHeight = -148;
				dim.aHeight = 90;
				break;
			case "consult" :
				dim.pHeight = 210;
				dim.bHeight = -235;
				dim.aHeight = 50;
				break;
			case "weigels" :
				dim.pHeight = 260;
				dim.bHeight = -285;
				dim.aHeight = 90;
				break;
			case "contact" :
				dim.pHeight = 10;
				dim.bHeight = -10;
				dim.aHeight = 120;
				break;
		 }
		
		return dim
	}
	
	$(".card img").hover(
		function(e) {
			var dim = lenPosition(e.target.id);
		
			$(".lens").css({ 
					"display" :"block", 
					"top" : dim.pHeight,
					"background-position" : "0px "+dim.bHeight+"px",
					"height" : dim.aHeight+"px"

					});
			$(e.target).animate({"marginLeft": "10px"}, "fast");
		},
		function(e) {
			$(".lens").css("display","none");
			$(e.target).animate({"marginLeft": "0px"}, "fast");
		}
	);
	
	$("#cover").hover(
		function(e) {
			$(e.target).animate({"marginLeft": "15px"}, "fast");
		},
		function(e) {
			$(e.target).animate({"marginLeft": "0px"}, "fast");
		}
	);
});