let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

//collect info on event and element when clicked
/* buttons.map((button) => {
	button.addEventListener("click", (e) => {
		console.log("clicked");
		console.log(e);
		console.log(e.target);
		console.log(e.target.innerText);
	});
}); */

buttons.map((button) => {
	button.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "C":
				display.innerText = " ";
				break;
			case "←":
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
				}
				break;
			case "=":
				try {
					display.innerText = eval(display.innerText);
				} catch (error) {
					display.innerText = "ERROR";
				}
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});
