"use strict";

export const fetchUser = async (userId) => {
	try {
		const respone = await fetch(`https://api.github.com/users/${userId}`);
		if (!respone.ok) {
			return null;
		}
		const userData = await respone.json();
		return userData;
	} catch (err) {
		throw new Error("Failed to get user data ");
	}
};

fetchUser("allorayz")
	.then((response) => console.log(response))
	.catch((err) => alert(err.message));
