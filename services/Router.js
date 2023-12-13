const Router = {
	init: () => {
		document.querySelectorAll("a.navlink").forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				const url = event.target.getAttribute("href");
				Router.go(url);
			});
		});
		// check initial URL
		Router.go(location.pathname);
	},
	go: (route, addToHistory = true) => {
		console.log(`going to ${route}`);

		if (addToHistory) {
			history.pushState({ route }, null, route);
		}
		let pageElement = null;
		switch (route) {
			case "/":
				pageElement = document.createElement("h1");
				pageElement.textContent = "menu";
				break;
			case "/order":
				pageElement = document.createElement("h1");
				pageElement.textContent = "Your order";
				break;
		}
		document.querySelector("main").appendChild(pageElement);
	},
};

export default Router;
