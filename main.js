const input = document.getElementById('input-box');
const list = document.getElementById('todo-list');

function addTask() {
  if (input.value) {
    const span = document.createElement('span');
    span.innerHTML = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('del-btn');

    const li = document.createElement('li');

    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
  } else {
    alert('Please, enter the name of the task.');
  }
}

function saveTasks() {
  localStorage.setItem('tasks', list.innerHTML);
  alert('Todo list saved.');
}

list.addEventListener('click', e => {
  switch (e.target.tagName) {
    case 'LI':
      e.target.classList.toggle('checked');
      break;
    case 'SPAN':
      e.target.parentElement.classList.toggle('checked');
      break;
    case 'BUTTON':
      e.target.parentElement.remove();
      break;
  };
});

window.addEventListener('load', () => {
  list.innerHTML = localStorage.getItem('tasks');
});