var $base_path = "http://testdevserver.net/igeo/";

$(document).ready(function()
{



});


function signup()
{


			var error = 0;
		
					
				/**** Validation For First Name Starts ***********/
				
					var letters_firstname = /^[A-Za-z]+$/; 
					var fn=$('#first_name').val().trim();
					
					
					if(fn == "")
					{
						
					$('#error_first_name').html("Please enter first name!");	
					$('#error_first_name').show();
					 error = error+1;
					
					}
					else if(letters_firstname.test(fn)==false)
					{
						
						$('#error_first_name').html("Please enter only alphabets!");
						$('#error_first_name').show();
						
						 error = error+1;
						
					}
					else if(fn.length<3)
					{
						
						$('#error_first_name').html("First Name Must Contain 3 alphabets!");
						$('#error_first_name').show();
						 error = error+1;
						
					}
					else if(fn.length>10)
					{
						
						$('#error_first_name').html("First Name Must Can Not exceed 10 alphabets!");
						$('#error_first_name').show();
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
				 error = error+1;
				}
				else if(letters_lastname.test(ln)==false)
				{
					
					$('#error_last_name').html("Please enter only alphabets!");
					$('#error_last_name').show();
					 error = error+1;
					
				}
				else if(ln.length<3)
				{
					
					$('#error_last_name').html("Last Name Must Contain 3 alphabets!");
					$('#error_last_name').show();
					 error = error+1;
					
				}
				else if(ln.length>10)
				{
					
					$('#error_last_name').html("Last Name Can Not exceed 10 alphabets!");
					$('#error_last_name').show();
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
						
						 error = error+1;
						
					}
					else if (mailformat.test(em)==false)
					{
						
						$('#error_email').html("Please enter a valid email address!");
						$('#error_email').show();
						 error = error+1;
							
					}
					
					else
					{
					$('#error_email').hide();
				
				$.ajax({
				url: $base_path+'check_email.php',
				data:{'email' : em},
				type:'post',
				async :false,
				success:function(data){
				  if(data != 0)
					   {
						
						$('#error_email').html("User with this Email Already Registered");
						$('#error_email').show();
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
					
						
						$.ajax({
						
						url: $base_path+'insert.php',
						data:{'first_name':fn,'last_name':ln,'email':em,'password':pwd},
						type:'post',
						async:false,
						success:function(data)
						{
							if(data == 1)
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

		
		var error=0;
					
					
					var mailformat = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;  
					
					var em=$('#email_id').val();
					if(em=="")
					{
						$('#error_email').html("Please enter email");
						$('#error_email').show();
						
						 error = error+1;
						
					}
					else if (mailformat.test(em)==false)
					{
						
						$('#error_email').html("Please enter a valid email address!");
						$('#error_email').show();
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
					
					
				if(!error)
				{
				$('#loading').show();
					$.ajax({
					
					url: $base_path+'function.php',
					type: 'post',
					data: {'function': 'login','email_id':em,'password':pwd},
					async: false,
					success: function(data){
					$('#loading').hide();
							if(data == 0)
							{
								
								$('#error_message').html("You have Entered Wrong User Name Or Password");
								$('#error_message').show();
							}
							else
							{
							
								//$(location).attr('href', 'enter.html');
								$.mobile.changePage( "#page3", { transition: "slideup", changeHash: false });

							}
					
					
					} 
					});
				}
	
	
	
}