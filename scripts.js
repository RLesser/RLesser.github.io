$(".box-row").hover(function(e) {
	if ($(this).css("float") == "left") {
		var borderSide = "border-left"
	} else if ($(this).css("float") == "right") {
		var borderSide = "border-right"
	}
	$(this).next().css(borderSide, "1px solid black")
	$(this).css(borderSide, "1px solid black")
	// $(this).prev().css("border-right", "1px solid black")
}, function(e) {
	if ($(this).css("float") == "left") {
		var borderSide = "border-left"
	} else if ($(this).css("float") == "right") {
		var borderSide = "border-right"
	}
	$(this).next().css(borderSide, "1px dashed black")
	$(this).css(borderSide, "1px dashed black")
	// $(this).prev().css("border-right", "1px dashed black")
})

$(".page-links").click(function(e) {
	var rightListNav = ["417px","208px","0px"]
	var widthListNav = ["209.3px","210.3px","209.3px"]
	var destIdx = $(this).attr("index")
	$(".nav-highlight").stop(true).animate({
		right: rightListNav[destIdx],
		width: widthListNav[destIdx]
	}, 200, function() {})

	var rightListContent = ["-200%", "-100%", "0%"]
	$(".content").stop(true).animate({
		right: rightListContent[destIdx]
	}, 200, function() {})
})