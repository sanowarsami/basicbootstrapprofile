function myValidation(){
	var name = document.forms['contactform']['name'].value;
	var email = document.forms['contactform']['email'].value;
	var phone = document.forms['contactform']['phone'].value;
	var message = document.forms['contactform']['message'].value;
	
	var error =[];
	if(name=='' || name.length <3){
		error[0]="Name must be at least three letters";
		document.getElementById('name-error').innerHTML=error[0];
		
	}else{
		document.getElementById('name-error').innerHTML='';
	}
	if(email=='' || email.length <10){
		error[1]="Please insert a valid email address.";
		document.getElementById('email-error').innerHTML=error[1];
		
	}else{
		document.getElementById('email-error').innerHTML='';
	}
	if(phone=='' || phone.length <11){
		error[2]="Please insert a valid phone number";
		document.getElementById('phone-error').innerHTML=error[2];
		
	}else{
		document.getElementById('phone-error').innerHTML='';
	}
	if(message=='' || message.length <20){
		error[3]="message must be at least 20 characters";
		document.getElementById('message-error').innerHTML=error[3];
		
	}else{
		document.getElementById('message-error').innerHTML='';
	}
	if(error.length>0){
		return false;
	}
}
function myFocus(x){
x.style.background='#e2898b';
}


/*======JQuery Start======*/

$(document).ready(function(){
	
	
	/*===menubar active start====*/
	$('#main-menu').on('click','li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	/*===menubar start====*/
	$('#mobile-icon').click(function(){
		$('#main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width()>576){
			$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
	});
	
	/*===upper button scroll start====*/
	$(window).scroll(function(){
		var x=$(window).scrollTop();
		if(x>1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	})
	
})