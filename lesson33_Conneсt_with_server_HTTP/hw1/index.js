const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(result => console.log(result));
}

function getTaskById(taskId) {
  return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`)
    .then(response => response.json())
    .then(result => console.log(result));
}

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});
