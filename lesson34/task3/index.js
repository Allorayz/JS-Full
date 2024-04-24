const emailInputElem = document.getElementById('email');
const passwordInputElem = document.querySelector('[name="name"]');
const userNameElem = document.querySelector('[name="password"]');
const registerBtn = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');

const baseUrl = 'https://66292e6c54afcabd07387955.mockapi.io/api/v1/users';

export const isValid = () => {
	if (
		emailInputElem.reportValidity() &&
		userNameElem.reportValidity() &&
		passwordInputElem.reportValidity()
	) {
		registerBtn.disabled = false;
	}
};

export const sendForm = formData => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});
};

export const onFormSubmit = event => {
	event.preventDefault();
	const formData = Object.fromEntries(new FormData(formElement));
	console.log(formData);

	// const formData = [...new FormData(formElement)].reduce(
	// 	(acc, [field, value]) => ({ ...acc, [field]: value }),
	// 	{}
	// );
	sendForm(formData)
		.then(response => response.json())
		.then(userData => {
			alert(Object.entries(userData));
			formElement.reset();
			registerBtn.disabled = true;
		});
};

formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('input', isValid);
