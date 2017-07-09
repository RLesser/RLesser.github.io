$(".page-links").hover(function(e) {
	$(this).next().css("border-left", "1px solid black")
	$(this).css("border-left", "1px solid black")
	// $(this).prev().css("border-right", "1px solid black")
}, function(e) {
	$(this).next().css("border-left", "1px dashed black")
	$(this).css("border-left", "1px dashed black")
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