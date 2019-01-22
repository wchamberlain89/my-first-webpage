$(function(){
	$("form button").click(function(){
		favoriteThings = [];
		$("input").each(function(input){
			favoriteThings.push($(this).val());
		});
		
		favoriteThings.forEach(function(element, index){
			$(".results").append("<li>" + element + "</li>");
		});
	});
});