const baseUrl = 'https://66292e6c54afcabd07387955.mockapi.io/api/v1/users';

export function getUsersList() {
	return fetch(baseUrl).then(resolve => resolve.json());
}

export function getUserById(userId) {
	return fetch(`${baseUrl}/${userId}`).then(resolve => resolve.json());
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
