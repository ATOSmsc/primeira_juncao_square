console.log()

document.addEventListener("keydown", function(event) 
{
	if (event.code === "KeyQ") {
		document.getElementById("minhaDiv").style.background = "red";
	} else if (event.code === "KeyW") {
		document.getElementById("minhaDiv").style.background = "green";
	} else if (event.code === "KeyE") {
		document.getElementById("minhaDiv").style.background = "black";
	}
});

document.addEventListener("keyup", function(event) 
{
	if (event.code === "KeyQ" || event.code === "KeyW" || event.code === "KeyE") {
		document.getElementById("minhaDiv").style.background = "";
	}
});

