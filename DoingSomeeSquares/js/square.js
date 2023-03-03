var minhaDiv = document.getElementById("minhaDiv");

minhaDiv.addEventListener("mousedown", iniciarArrastar);
minhaDiv.addEventListener("touchstart", iniciarArrastar);

minhaDiv.addEventListener("mouseup", pararArrastar);
minhaDiv.addEventListener("touchend", pararArrastar);

function iniciarArrastar(e) 
{
    e.preventDefault();

    if (e.type === "touchstart") {
        var touch = e.touches[0];
            offsetX = touch.clientX - minhaDiv.offsetLeft;
            offsetY = touch.clientY - minhaDiv.offsetTop;
                document.addEventListener("touchmove", moverDiv);
    } else {
        offsetX = e.clientX - minhaDiv.offsetLeft;
        offsetY = e.clientY - minhaDiv.offsetTop;
            document.addEventListener("mousemove", moverDiv);
    }
}
function moverDiv(e) 
{
    e.preventDefault();

    if (e.type === "touchmove") {
        var touch = e.touches[0];
            minhaDiv.style.left = touch.clientX - offsetX + "px";
            minhaDiv.style.top = touch.clientY - offsetY + "px";
    } else {
        minhaDiv.style.left = e.clientX - offsetX + "px";
        minhaDiv.style.top = e.clientY - offsetY + "px";
    }
}
function pararArrastar(e) 
{
    if (e.type === "touchend") {
    document.removeEventListener("touchmove", moverDiv);
    } else {
    document.removeEventListener("mousemove", moverDiv);
    }
}
