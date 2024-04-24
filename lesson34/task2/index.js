const baseUrl = 'https://61b8921e64e4a10017d19082.mockapi.io/api/v1/users';

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
