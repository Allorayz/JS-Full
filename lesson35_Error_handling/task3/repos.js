const listElement = document.querySelector(".repo-list");

export const cleanReposList = () => {
	listElement.innerHTML = "";
};

export const renderRepos = (reposList) => {
	const reposListElems = reposList.map(({ name }) => {
		const listElem = document.createElement("li");
		listElem.classList.add("repo-list__item");
		listElem.textContent = name;

		return listElem;
	});

	listElement.append(...reposListElems);
};
