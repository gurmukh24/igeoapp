var $base_path = "http://testdevserver.net/igeo/";
         var DeviceId = "";
         var Version =  "";
         var Platform = "";
         
         if (localStorage.getItem("device_register") === null) {
           localStorage.device_register = 0;
                 }
       
$(document).ready(function()
{

	if(localStorage.password  && localStorage.email)
	{
	
	$('#checkbox-1').prop('checked',true) ;
	$('label.ui-checkbox-on span.ui-btn-inner span.ui-icon').removeClass('ui-checkbox-off');
	$('label.ui-checkbox-on span.ui-btn-inner span.ui-icon').addClass('ui-checkbox-on');
	$('#password').val(localStorage.password);
	$('#email_id').val(localStorage.email);
	}
	
	
    
       

});


function signup()
{

   alert(DeviceId);
   alert(Version);
   alert(Platform);
   alert(pushid);
		$.mobile.loading( "show", {
		text: "Please Wait...",
		textVisible: true,
		theme: "b",
		html: ""
		});


			var error = 0;
		
					
				/**** Validation For First Name Starts ***********/
				
					var letters_firstname = /^[A-Za-z]+$/; 
					var fn=$('#first_name').val().trim();
					
					
					if(fn == "")
					{
						
					$('#error_first_name').html("Please enter first name!");	
					$('#error_first_name').show();
					$.mobile.loading("hide");
					 error = error+1;
					
					}
					else if(letters_firstname.test(fn)==false)
					{
						
						$('#error_first_name').html("Please enter only alphabets!");
						$('#error_first_name').show();
						$.mobile.loading( "hide");
						
						 error = error+1;
						
					}
					else if(fn.length<3)
					{
						
						$('#error_first_name').html("First Name Must Contain 3 alphabets!");
						$('#error_first_name').show();
						$.mobile.loading( "hide");
						 error = error+1;
						
					}
					else if(fn.length>10)
					{
						
						$('#error_first_name').html("First Name Must Can Not exceed 10 alphabets!");
						$('#error_first_name').show();
						$.mobile.loading( "hide");
						 error = error+1;
						
					}
					else
					{
						
						$('#error_first_name').hide();
					}
					
			/**** Validation For First Name Ends ***********/	
			
			
					
			/**** Validation For Last Name Starts ***********/
			
				var letters_lastname = /^[A-Za-z]+$/; 
				var ln=$('#last_name').val().trim();
				if(ln == "")
				{
				$('#error_last_name').html("Please enter last name!");
				$('#error_last_name').show();				
				$.mobile.loading( "hide");
				 error = error+1;
				}
				else if(letters_lastname.test(ln)==false)
				{
					
					$('#error_last_name').html("Please enter only alphabets!");
					$('#error_last_name').show();
					$.mobile.loading( "hide");
					 error = error+1;
					
				}
				else if(ln.length<3)
				{
					
					$('#error_last_name').html("Last Name Must Contain 3 alphabets!");
					$('#error_last_name').show();
					$.mobile.loading( "hide");
					 error = error+1;
					
				}
				else if(ln.length>10)
				{
					
					$('#error_last_name').html("Last Name Can Not exceed 10 alphabets!");
					$('#error_last_name').show();
					$.mobile.loading( "hide");
					 error = error+1;
					
				}
				else
				{
					
					$('#error_last_name').hide();
				}
				
			/**** Validation For Last Name Ends ***********/
			
			
			
			/**** Validation For Email Starts ***********/
			
					var mailformat = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;  
					var em=$('#email').val();
					
					if(em=="")
					{
						$('#error_email').html("Please enter email");
						$('#error_email').show();
						$.mobile.loading( "hide");
						
						 error = error+1;
						
					}
					else if (mailformat.test(em)==false)
					{
						
						$('#error_email').html("Please enter a valid email address!");
						$('#error_email').show();
						$.mobile.loading( "hide");
						 error = error+1;
							
					}
					
					else
					{
					$('#error_email').hide();
				
				$.ajax({
				url: $base_path+'check_email.php',
				data:{'email' : em},
				type:'post',
				dataType: "json",
				async :false,
				success:function(data){
				   if(data.Status == "true")
					   {
						
						$('#error_email').html("User with this Email Already Registered");
						$('#error_email').show();
						$.mobile.loading( "hide");
						 error = error+1;
						
					   }
					   else
					   {
						$('#error_email').hide();
						}
				}
				})
			  
						
						
					   
						
					}
				
			/**** Validation For Email Ends ***********/
			
			
			
			
			/**** Validation For Password Starts ***********/
				
					var pwd=$('#password').val().trim();
					
					if(pwd=="")
					{
					
						$('#error_pwd').html("Please enter Password");
						$('#error_pwd').show();
						$.mobile.loading( "hide");
						
						 error = error+1;
						
					}
					else if(pwd.length<5)
					{
							
							$('#error_pwd').html("Password Must Be of 5 Characters");
							$('#error_pwd').show();
							 error = error+1;
							
					}
					else if(pwd.length>12)
					{
						
							$('#error_pwd').html("Password Can Not Be Exceed By 12 Characters");
							$('#error_pwd').show();
							 error = error+1;
							
					}
					else
					{
						
						$('#error_pwd').hide();
						
					}
					
					
					var confirmPassword = $("#confirm_password").val();
						
					if(confirmPassword == "")
					{
						$("#error_cpwd").html("Please Enter Confirm Password");
						$("#error_cpwd").show();
						error = error+1; 
					}		
					else if(pwd != confirmPassword)
					{
						
						$("#error_cpwd").html("Passwords do not match!");
						$("#error_cpwd").show();
						error = error+1;
					}
					else
					{
						
						$("#error_cpwd").hide();
					}
					
						
					if(!error)
					{
					$.mobile.loading( "hide");
					
		
						
						$.ajax({
						
						url: $base_path+'insert.php',
						data:{'first_name':fn,'last_name':ln,'email':em,'password':pwd,'PushId':pushid,'Platform':Platform,'Version':Version,'DeviceId':DeviceId},
						type:'post',
						dataType: "json",
						async:false,
						success:function(data)
						{
						
							if(data.Status == "true")
							{
								$("#error_registration").html("You have Sucessfully Register");
								$("#error_registration").show();
								
							}
							else
							{
									$("#error_registration").html("Sorry due to some technical errors please register again");
									$("#error_registration").show();
							}
							
							
						}
						
						
						});
						
						
						
					}
					
			
			/**** Validation For Password Ends ***********/
}



		/******* Validation For Login User *********/
function verify_user()
{



		$.mobile.loading( "show", {
		text: "Please Wait...",
		textVisible: true,
		theme: "b",
		html: ""
		});
		var error=0;
					
					var check_box = $('#checkbox-1').is(':checked');
					
					var mailformat = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;  
					
					var em=$('#email_id').val();
					if(em=="")
					{
						$('#error_email').html("Please enter email");
						$('#error_email').show();
						$.mobile.loading( "hide");
						
						 error = error+1;
						
					}
					else if (mailformat.test(em)==false)
					{
						
						$('#error_email').html("Please enter a valid email address!");
						$('#error_email').show();
						$.mobile.loading( "hide");
						 error = error+1;
							
					}
					else
					{
					
						$('#error_email').hide();
					}
					
				
					
					var pwd=$('#password').val().trim();
					
					if(pwd=="")
					{
					
						$('#error_pwd').html("Please enter Password");
						$('#error_pwd').show();
						$.mobile.loading( "hide");
						
						 error = error+1;
						
					}
					else if(pwd.length<5)
					{
							
							$('#error_pwd').html("Password Must Be of 5 Characters");
							$('#error_pwd').show();
							$.mobile.loading( "hide");
							 error = error+1;
							
					}
					else if(pwd.length>12)
					{
						
							$('#error_pwd').html("Password Can Not Be Exceed By 12 Characters");
							$('#error_pwd').show();
							$.mobile.loading( "hide");
							 error = error+1;
							
					}
					else
					{
						
						$('#error_pwd').hide();
						
					}
					
					
				if(!error)
				{

					
					$.ajax({
					
					url: $base_path+'function.php',
					type: 'post',
					dataType: "json",
					data: {'function': 'login','email':em,'password':pwd},
					async: false,
					success: function(data){
					$.mobile.loading( "hide");
							if(data.Status == "false")
							{
								
								$('#error_message').html("You have Entered Wrong User Name Or Password");
								$('#error_message').show();
								$.mobile.loading( "hide");
							}
							else
							{
								if(check_box == true)
								{
									localStorage.email=em;
									localStorage.password=pwd;
									
								}
								else
								{
									localStorage.clear(); 
								}
								
								update_device_id(data.user_id);
								
												
							}
					
					
					} 
					});
				}
	
	
	
}
/******* Validation For Login User End*********/


/******* Send Device Id *********/

function update_device_id(user_id)
{

/*alert(user_id);
alert(DeviceId);
alert(Version);
alert(Platform);
alert(localStorage.push_id);*/
	$.ajax({
					
					url: $base_path+'function.php',
					type: 'post',
					
					data: {'function': 'update_device_id','user_id':user_id,'DeviceId':DeviceId,'Version':Version,'Platform':Platform,'Pushid':localStorage.push_id},
					async: false,
					success: function(data){
					if(data)
					{
						window.location.href="#page2"
					}
					else
					{
						alert('Please Sign In Agian') 
					}
					}
					
					});

}


/******* Send Device Id End*********/