const baseUrl = 'https://66292e6c54afcabd07387955.mockapi.io/api/v1/users';

function getUsersList(baseUrl) {
	return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
	return fetch(`${baseUrl}/${userId}`).then(user => user.json());
}

export function createUser(userData) {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
}

export function deleteUser(userId) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'DELETE',
	});
}

export function updateUser(userId, userData) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
}

// examples
getUsersList(baseUrl).then(users => {
	console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('8').then(userData => {
	console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

// const newUserData = {
// 	email: 'cool@email.com',
// 	firstName: 'Iron',
// 	lastName: 'Man',
// 	age: 42,
// };

// createUser(newUserData).then(() => {
// 	console.log('User created');
// });

const updatedUserData = {
	email: 'new@email.com',
	firstName: 'John',
	lastName: 'Doe',
	age: 17,
};

updateUser('1', updatedUserData).then(() => {
	console.log('User updated');
});

// deleteUser('10').then(() => {
// 	console.log('User updated');
// });
