"use strict";

/**
 * @param {string[]} users
 * @return {promise}
 */
// my finale
export const getUsersBlogs = ([...users]) => {
	const res = users.map(async (user) => {
		const response = await fetch(`https://api.github.com/users/${user}`);
		const userData = await response.json();
		const { blog } = userData;
		return blog;
	});
	return Promise.all(res);
};

// first variant
// export const getUsersBlogs = async ([...users]) => {
// 	const res = await Promise.all(
// 		users.map(async (user) => {
// 			const response = await fetch(
// 				`https://api.github.com/users/${user}`
// 			);
// 			const userData = await response.json();
// 			const { blog } = userData;
// 			return blog;
// 		}, [])
// 	);
// 	return res;
// };

// examples;
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
	console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
