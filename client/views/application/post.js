Template.post.events({
	'click .post': function(e) {
		alert('Vous avez cliqué');
	}
});

Template.post.rendered = function(){
	$(document).ready(function(){
    	$('.collapsible').collapsible();
  	});
}