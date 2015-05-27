$("#p1 > em, .p > strong > em").each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});