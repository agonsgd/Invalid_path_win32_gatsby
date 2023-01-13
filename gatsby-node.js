const { createAllPages } = require("./src/build/create-pages.js");


exports.createPages = ({ graphql, actions }) =>
	new Promise((resolve, reject) => {
		createAllPages(actions, resolve, reject);
	});
