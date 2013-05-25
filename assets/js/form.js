
$(function(){
		// Validate Form (client side), fall back on server side in case javascript is disabled.
		$("#contact_form").validate({
		rules: {
			relationship: "required",
			name: "required",
			email: {
				required: true,
				email: true
			},
			address1:	"required",
			city: 		"required",
			state:		"required",
			zipcode:	"required",
			captcha:	"required"
		},
		messages : {
			relationship: "I need to know what category you fit in.",
			name: "What's your name again?",
			email: {
				required: "Oops.. I need your email address in order for me to contact you.",
				email: "Your email address must be in the format of yourname@gmail.com"
			},
			address1: 	"I need your address so I can send you a gift!",
			city:		"I also need your city otherwise Santa can't send you anything",
			state:		"State is also a requirement by USPS. Sorry!",
			zipcode: 	"Zipcode is crucial. I believe it's the last thing.",
			captcha: 	"You need to enter the words that appear on image above."
		}
	});
	$(".friends-btn .btn-en").click(function(){
			$(".form").slideToggle();
	});	
	
});
