const baseUrl =
	'https://https://66292e6c54afcabd07387955.mockapi.io/api/v1/users';

function getUsersList() {
	return fetch(baseUrl).then(resolve => resolve.json());
}

function getUserById(userId) {
	return fetch(`${baseUrl}/${userId}`).then(resolve => resolve.json());
}
function createUser(userData) {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
}

function deleteUser(userId) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'DELETE',
	});
}

function updateUser(userId, userData) {
	return fetch(`${baseUrl}/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
}

// examples
getUsersList().then(users => {
	console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('5').then(userData => {
	console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
	email: 'cool@email.com',
	firstName: 'Iron',
	lastName: 'Man',
	age: 42,
};

createUser(newUserData).then(() => {
	console.log('User created');
});

const updatedUserData = {
	email: 'new@email.com',
	firstName: 'John',
	lastName: 'Doe',
	age: 17,
};

updateUser('1', updatedUserData).then(() => {
	console.log('User updated');
});

deleteUser('2').then(() => {
	console.log('User updated');
});
