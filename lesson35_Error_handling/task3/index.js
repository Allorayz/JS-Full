import { renderUserData } from "./user.js";
import { fetchRepositories, fetchUserData } from "./gateways.js";
import { cleanReposList, renderRepos } from "./repos.js";
import { hideSpinner, showSpinner } from "./spinner.js";

const defaultUser = {
	avatar_url: "https://avatars3.githubusercontent.com/u10001",
	name: "",
	location: "",
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
	showSpinner();
	cleanReposList();
	const userName = userNameInputElem.value;
	fetchUserData(userName)
		.then((userData) => {
			renderUserData(userData);
			return userData.repos_url;
		})
		.then((url) => fetchRepositories(url))
		.then((reposList) => {
			renderRepos(reposList);
		})
		.catch((err) => {
			alert(err.message);
		})
		.finally(() => {
			hideSpinner();
		});
};

showUserBtnElem.addEventListener("click", onSearchUser);
