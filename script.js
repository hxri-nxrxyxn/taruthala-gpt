'use strict'

function replaceDivContent(filePath) {
	fetch(filePath)
	.then(response => response.text())
	.then(data => {
		document.querySelector(".rivals").innerHTML = data;
	})
	.catch(error => {
		console.error("Error fetching file:", error);
	});
}

// for (let i = 0; i < 8; i++)
//	document.querySelectorAll(".rival")[i].addEventListener("click", ()=> {
//		replaceDivContent("rival-stats.html")
//});

