document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const task = input.value; 

    
    const listItem = document.createElement('li');
    listItem.textContent = task;

    taskList.appendChild(listItem); 

    input.value = ''; 

  });
});
