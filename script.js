function ChangeBtn(type, element) {
	let tabs = document.getElementsByClassName("btn");

	for (let i = 0; i < tabs.length; i++) {
		tabs[i].style.background = "aqua";
	}
	element.style.background = "black";

	document.getElementById(type).style.display = "flex";

	switch (type) {
		case "trend":
			document.getElementById("new").style.display = "none";
			document.getElementById("best-sell").style.display = "none";
			break;
		case "new":
			document.getElementById("trend").style.display = "none";
			document.getElementById("best-sell").style.display = "none";
			break;
		case "best-sell":
			document.getElementById("new").style.display = "none";
			document.getElementById("trend").style.display = "none";
			break;
	}
}
