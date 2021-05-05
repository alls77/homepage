function colorLinks(color, exceptionIds) {
	let links = document.querySelectorAll("a");
	try {
		for (let i = 0; i < links.length; i++) {
			if (exceptionIds.includes(links[i].id))
				continue;
			links[i].style.color = color;
		}
	} catch (e) {
		console.log(e);
	}
}

function colorElementsByIds(elementsIds, color) {
	try {
		for (let i = 0; i < elementsIds.length; i++) {
			document.getElementById(elementsIds[i]).style.color = color;
		}
	} catch (e) {
		console.log(e);
	}
}

function changeColorMode(linkColor, elementColor, pageColor, bodyColor) {
	colorLinks(linkColor, ["fb_link", "t_link", "mail_link"]);
	colorElementsByIds(["mail_svg", "mail_text", "t_svg", "t_text", "fb_svg", "fb_text"], elementColor);

	document.getElementById('page').style.backgroundColor = pageColor;
	document.body.style.color = bodyColor;
}

const switcher = document.getElementById('modeSwitcher');

switcher.addEventListener('change', () => {
	if (switcher.checked) {
		changeColorMode("black", "white", "#77148A", "white");
	} else {
		changeColorMode("blue", "", "white", "black");
	}
});