function addItem() {
  const input = document.getElementById('item');
  let items = JSON.parse(localStorage.getItem('items') || '[]');
  items.push(input.value);
  localStorage.setItem('items', JSON.stringify(items));
  input.value = '';
  renderItems();
}

function deleteItem(index) {
  let items = JSON.parse(localStorage.getItem('items') || '[]');
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  renderItems();
}

function renderItems() {
  let items = JSON.parse(localStorage.getItem('items') || '[]');
  const list = document.getElementById('itemList');
  list.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item + ' ';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => deleteItem(index);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Initial render
renderItems();

document.addEventListener('deviceready', function() {
    // Primary color example: Blue
    StatusBar.backgroundColorByHexString("#62f116"); // Hex code
    StatusBar.styleLightContent(); // White text/icons
}, false);