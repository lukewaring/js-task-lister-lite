document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const input = document.getElementById('new-task-description')
  const ul = document.getElementById('tasks')

  const prioritySelect = document.createElement('select')
  prioritySelect.innerHTML = `<select>
    <option value='high'>High</option>
    <option value='medium'>Medium</option>
    <option value='low'>Low</option>
    </select>`
  form.insertAdjacentElement('afterbegin', prioritySelect)

  const prioritySelectLabel = document.createElement('label')
  prioritySelectLabel.innerText = 'Priority: '
  prioritySelect.insertAdjacentElement('beforebegin', prioritySelectLabel)
  
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const li = document.createElement('li')
    const button = document.createElement('button')
    
    if (prioritySelect.value === 'high') {
      li.style.color = 'red'
    } else if (prioritySelect.value === 'medium') {
      li.style.color = 'gold'
    } else {
      li.style.color = 'green'
    }

    li.textContent = input.value
    button.textContent = 'X'
    li.appendChild(button)
    ul.appendChild(li)

    button.addEventListener('click', function () {
      li.remove()
    })
  })
});


/* A priority value selected from a dropdown that is used to 
determine the color of the text in the list (e.g. red for high 
priority, yellow for medium, green for low)

As a challenge, implement a sorting functionality that displays 
the tasks ASC/DESC based on priority*/
