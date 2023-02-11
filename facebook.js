var u;
var p;
var btn;
{
u = document.getElementById("username").value;
p = document.getElementById("password").value;
btn = document.getElementById("btn").value;
if(username=="admin"&& password=="user")	
{
alert("login succesful");
return false;
	
}
else
{
	alert("login failed");
}