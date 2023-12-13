const Router = {
	init: () => {
		document.querySelectorAll("a.navlink").forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				const url = event.target.getAttribute("href");
				Router.go(url);
			});
		});

		// an event handler for URL changes
		window.addEventListener("popstate", (event) => {
			Router.go(event.state.route, false);
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
			default:
				if (route.startsWith("/products-")) {
					pageElement = document.createElement("h1");
					pageElement.textContent = "Details";
					const paramId = route.substring(route.lastIndeOf("-") + 1);
					pageElement.dataset.id = paramId;
				}
		}

		if (pageElement) {
			const cachedElement = document.querySelector("main");

			// to remove previous injected elements
			// document.querySelector("main").children[0].remove()

			cachedElement.innerHTML = "";
			cachedElement.appendChild(pageElement);
			window.scrollX = 0;
			window.scrollY = 0;
		}
	},
};

export default Router;
