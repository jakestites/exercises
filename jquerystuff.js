
var attachListener = function () {
	$('.filter-button').click(function() {
		console.log($(this));
		$(this).toggleClass("active");
		$("." + this.id).toggle();
	});
};

$(document).ready(function() {
	attachListener();
});
