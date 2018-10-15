var popdiv = document.createElement("div");

popdiv.id = "menumessage";
// popdiv.textContent = "default message for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1px solid white";
popdiv.style.backgroundColor = "black";
popdiv.style.position = "absolute";
popdiv.style.padding = "10px";
popdiv.style.display = "none";

document.body.appendChild(popdiv);

var tabs = document.querySelectorAll("#topNav a");

for (var index = 0; index < tabs.length; index++) {
    var tab = tabs[index];
    tab.onmouseenter = function() {
        ShowPopUp(this)
    }
    tab.onmouseleave = function() {
        HidePopUp()
    }
}

function ShowPopUp(tab) {
    var popdiv = document.getElementById("menumessage");
    popdiv.style.left = "30px";
    popdiv.style.top = "110px";
    popdiv.style.display = "block";
}

function HidePopUp() {
    var popdiv = document.getElementById("menumessage");
    popdiv.style.display = "none";
}

var popuptext = "";
switch (tab.textContent) {
    case "Home":
        popuptext = "Return to the homepage.";
        break;
    case "Toys":
        popuptext = "See our latest toys!";
        break;
    case "Sports":
        popuptext = "See our new line of sporting goods!";
        break;
    default:
        popuptext = "test";
        break;
}

if (popuptext != "") {
    popdiv.innerHTML = popuptext;
    popdiv.style.display = "block";
}
