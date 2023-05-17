
      // Get references to the form, the unordered list, and the delete button
const form = document.querySelector('form');
const itemList = document.querySelector('#item-list');
const deleteBtn = document.querySelector('#delete-btn');

// Load the list items from localStorage, if available
const storedItems = localStorage.getItem('items');
if (storedItems) {
  itemList.innerHTML = storedItems;
}

// Add an event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input value from the text input
  const inputValue = document.querySelector('#item-input').value;

  // Create a new list item and append it to the unordered list
  const newItem = document.createElement('li');
  newItem.textContent = inputValue;

  // Create a new delete button for the list item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  newItem.appendChild(deleteBtn);

  itemList.appendChild(newItem);

  // Save the updated list items to localStorage
  localStorage.setItem('items', itemList.innerHTML);

  // Clear the text input
  document.querySelector('#item-input').value = '';
});

// Add an event listener to the unordered list
itemList.addEventListener('click', function(event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('delete-btn')) {
    // Prompt the user for confirmation before deleting the list item
    const confirmDelete = confirm('Are you sure you want to delete this item?');
  
    if (confirmDelete) {
      // Remove the list item from the unordered list
      const listItem = event.target.parentElement;
      itemList.removeChild(listItem);
    
      // Save the updated list items to localStorage
      localStorage.setItem('items', itemList.innerHTML);
    }
  }
});

// Add an event listener to the delete button
    deleteBtn.addEventListener('click', function() {
  // Prompt the user for confirmation before deleting the list items
  const confirmDelete = confirm('Are you sure you want to delete all items?');
  
  if (confirmDelete) {
    // Remove all child elements from the unordered list
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    
    // Clear the list items from localStorage
    localStorage.removeItem('items');
  }

  
      });
