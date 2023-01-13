const createAllPages = async (actions, resolve, reject) => {
	try {
		actions.createPage({
			path: `/dummy-page/:subscription_id`,
			component: require.resolve(`../templates/subscription.js`),
			context: {
				title: "Dummy Page",
				content: "This is some dummy content for the page",
			},
		});
	} catch (error) {}
	resolve();
};

exports.createAllPages = createAllPages;
