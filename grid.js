var main = function() {
	
	grids(16);
	getDefaultColor();

	$("#getGrid").click(function() {		
		getNewGrid();	
		getDefaultColor();	
	});

	$("#getRandom").click(function() {		
		getNewGrid();
		$("td").mouseenter(function() {
			$(this).css("background-color", getRandomColor());
		});	
	});

	$("#getOpacity").click(function() {
		getNewGrid();
		$("td").css("background-color", "#9FB7FF");
		$("td").mouseenter(function() {
			var $opa = $(this).css("opacity");
			console.log($opa);
			if($opa > 0.1) {
				$(this).css("opacity", $opa - 0.1);				
			} else {
				$(this).css("opacity", 0);				
			}			
		});
	});
};



function grids(n) {
	for(var i = 1; i <= n; i++) {	
		var $getClass = "col" + i;
		$(".square").append("<tr class=" + $getClass + "></tr>");
		for(var j = 1; j <= n; j++) {			
			$("." + $getClass).append("<td></td>");
		}
	}
}

function getNewGrid() {
	$(".square").text("");
	var $row = prompt("How many squares do you want in each side? \nPlease enter between 1 to 64");
	if($row <= 64 && $row > 1) {
		grids($row);
	} else {
		grids(16);
		alert("Please enter between 1 to 64");
	}
}

function getDefaultColor() {
	$("td").mouseenter(function() {
		$(this).css("background-color", "#D0F4F7");
	});	
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

$(document).ready(main);