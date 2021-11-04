function login() 
{
	var uname=document.getElementById('username').value;
	var pass=document.getElementById('password').value;
	


	if(uname=="adi" && pass=="123")
	{
		location.assign("file:///C:/Users/adi83/OneDrive/Desktop/JavaScript-LoginPage.htm/Sucess.html");
	}
	else
	{
		window.alert("login failed");
	}

}
