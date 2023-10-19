const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

// Track added tasks to prevent duplicates
const addedTasks = new Set();

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '' || addedTasks.has(taskText)) {
    alert('Please enter a valid task or avoid duplicates.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => deleteTask(taskText);

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  addedTasks.add(taskText);

  // Clear the input field
  taskInput.value = '';
}

function deleteTask(taskText) {
  const taskItem = [...taskList.children].find((item) => item.childNodes[0].textContent === taskText);
  if (taskItem) {
    taskList.removeChild(taskItem);
    addedTasks.delete(taskText);
  }
}
