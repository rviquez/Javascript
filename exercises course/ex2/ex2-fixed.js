var parents = ["#p1",".p > strong"];

var $selection;

for (var i=0; i<parents.length; i++) {
	if (!$selection) $selection = $("> em",parents[i]);
	else $selection = $selection.add("> em",parents[i]);
}

$selection.each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});