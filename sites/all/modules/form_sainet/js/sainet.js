jQuery(document).ready(function(){
	console.log("ok");
	jQuery("#edit-submit-button").click(function(e){
		e.preventDefault();
		jQuery("#edit-group1").fadeOut(function(){
			jQuery("#edit-group2").fadeIn();
		});
	});

	jQuery("#edit-back").click(function(e){
		e.preventDefault();
		jQuery("#edit-group2").fadeOut(function(){
			jQuery("#edit-group1").fadeIn();
		});
	});
});

