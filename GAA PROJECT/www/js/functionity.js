var server= 'http://192.168.43.39:3000/mobile';




function validateInput(class_dom,page){

	var return_var;
	var data=$$(page.container).find('.'+class_dom);

	for(var i in data){
			if(i<data.length){
				console.log($$(data[i]).val());
				if($(data[i]).val()!=''){
					var type=$(data[i]).attr('type');
				
					if(type=='email'){
			  			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return_var= re.test($$(data[i]).val());
					
						if(!re.test($(data[i]).val())){
							$(data[i]).notify('mail not valid','info');
							return_var=false
							
						}
						
					}
					else if(type=='password'){
						if($(data[i]).val().length<8){
							$(data[i]).notify('min 8 character','info');
							return_var=false
									

						}
					}

					else if(type=='username'){
						if($(data[i]).val().length<8){
							$(data[i]).notify('min 8','info');
							return_var=false;
										
						}
					}	

				}else{
					$(data[i]).notify('fill first','info');
					return_var=false;
						
				}


			}
	}
	
		if(return_var!=false){
			return true;
		}
		else{
			return false
		}


}







// function library

function createTokenId(data){
	var data_auth=JSON.stringify(data);
    function ch(){
	    try {
	        localStorage.gaa_auth_mobile;
	        return true;
	    } catch(e) {
	        return false;
	    }
	}

	if(ch()===true){
		localStorage.setItem('gaa_auth_mobile',data_auth);
	}
	else{
		
		localStorage.setItem('gaa_auth_mobile',data_auth);
	}
}



function getTokenId(page){

	function ch(){
	    if(localStorage.gaa_auth_mobile!=undefined){
	    	return true;
	    }else{
	    	return false;
	    }
	      
	}
	if(ch()===true){
		var idL,tokenL,auth=localStorage.gaa_auth_mobile;
		auth=JSON.parse(auth);
		// console.log(auth);
		if((auth.token==null)&&(auth.id==null)){
			idL=null;
			tokenL=null;
		}else{
			idL=auth.id;
			tokenL=auth.token;
		}
		return {id:idL,token:tokenL};
	}else{
		if('login'!=page.name){
			window.location='auth.html';
		}
	}
	
}

function getTokenIdAll(){

	
	function ch(){
	    if(localStorage.gaa_auth_mobile!=undefined){
	    	return true;
	    }else{
	    	return false;
	    }
	      
	}
	if(ch()===true){
		var idL,tokenL,auth=localStorage.gaa_auth_mobile;
		auth=JSON.parse(auth);
		// console.log(auth);
	
		return auth;
	}else{
		if(((domain+'/login')!=location.href)&&((domain+'/login/')!=domain+'/login/')){
						window.location= domain+'/login/';
		}
		return null;
	}
	
}

