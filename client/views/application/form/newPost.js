Template.newPost.events({
	'submit form': function(e){
		e.preventDefault();

		var author  = $("input[name='author']").val();
		var title   = $("input[name='title']").val();
		var content = $("textarea[name='content']").val();

		var post = {
			author  : author,
			title   : title,
			content : content
		}

		//Insert coté client

		// Posts.insert(post, function(err,id){
		// 	if (err) {
		// 		alert(err.reason)
		// 	}
		// 	else{
		// 		$('form input, form textarea').val('');
		// 	}
		// });
	}
});

AutoForm.addHooks(['insertPostForm'],{
     // ID du formulaire
		onSuccess: function(formType, result) {
		    Router.go("/posts");
		},
});