const btnAdd = document.getElementById('btnAdd');
const items = document.getElementsByTagName('li');
const listItems = document.getElementById('listItem');

btnAdd.addEventListener('click', function(){
  const li =document.createElement('li');
  li.textContent = 'dyanmic item';
  listItems.appendChild(li);
  console.log('Total HTML Collection', listItems.length)
})