function clock()
{
	var clock=new Date();
	document.getElementById("clock").innerHTML=clock.toLocaleTimeString();
}
setInterval(clock,1000)