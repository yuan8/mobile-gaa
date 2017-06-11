myApp.onPageInit('home', function (page) {

// var auth=getTokenId(page.name);
// console.log(auth);
	console.log(page.name);

});



// home


myApp.onPageInit('register',function(page) {
	
	$$(page.container).find('#button-register').click(function(){
		var  data={};
		data['userName']=$$(page.container).find('#username').val();
		data['email']=$$(page.container).find('#email').val();
		data['password']=$$(page.container).find('#password').val();
		data['name']=$$(page.container).find('#name').val();

	
				

		if(validateInput('required-input',page)){

			$.post(server+'/register',{data},function(data){
				console.log('this is masuk');
				console.log(data);
				if(data.signal_err!=undefined){
					// $.notify(data.message, "info");
					myApp.addNotification({
					    message: data.message,
					    button: {
					        text: 'Close',
					        color: 'yellow'
					    }
					});
				}
				else{
					viewAuth.router.loadPage('pages/auth/login.html');
					myApp.alert('register success, let login !');
				}
			});
		}
	});
})
// register


myApp.onPageInit('login',function(page) {
	// $$(page.container).find('#button-login').click(function(){
	// 	var  data={};
	// 	data['id']=$$(page.container).find('#id').val();
	// 	data['password']=$$(page.container).find('#password').val();

	// 	$.post(server+'/login',{data},function(data){
	// 		if(data.signal_err==undefined){
	// 			console.log(data);

	// 		}else{
	// 			myApp.alert(data.message);
	// 		}
	// 	})
	// });

	window.location='/index.html';


});
//login