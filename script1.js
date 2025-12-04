const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  taskList.appendChild(createTaskElement(taskText));
  taskInput.value = '';
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete">✔</button>
      <button class="edit">✎</button>
      <button class="delete">🗑</button>
    </div>
  `;
  const completeBtn = li.querySelector('.complete');
  const editBtn = li.querySelector('.edit');
  const deleteBtn = li.querySelector('.delete');

  completeBtn.addEventListener('click', () => {
    li.querySelector('span').classList.toggle('completed');
  });

  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edit your task:', li.querySelector('span').innerText);
    if (newTask) li.querySelector('span').innerText = newTask;
  });

  deleteBtn.addEventListener('click', () => li.remove());

  return li;
}

// Attach event listeners to buttons of existing tasks
document.querySelectorAll('#taskList li').forEach(li => {
  const completeBtn = li.querySelector('.complete');
  const editBtn = li.querySelector('.edit');
  const deleteBtn = li.querySelector('.delete');

  completeBtn.addEventListener('click', () => {
    li.querySelector('span').classList.toggle('completed');
  });

  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edit your task:', li.querySelector('span').innerText);
    if (newTask) li.querySelector('span').innerText = newTask;
  });

  deleteBtn.addEventListener('click', () => li.remove());
});

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
