var listItems = ["Get groceries", "Pay bills", "Do laundry", "Wash car"];

function renderItem(item) {
    var li = document.createElement('li');
    li.innerHTML = item;
    li.onclick = listItemClick;
    document.querySelector('.list').appendChild(li);
}

for (var i = 0; i < listItems.length; i++) {
    renderItem(listItems[i]);
}

var form = document.querySelector('.form');

var lineItem = document.querySelector('li');

function listItemClick(clickEvent) {
  var listItem = clickEvent.target;
  var textDecoration = listItem.style.textDecoration;
   if(textDecoration === "line-through") {
    listItem.style.textDecoration = "";
 } else {
   listItem.style.textDecoration = "line-through";
 }
}

form.onsubmit = function() {
    var input = document.querySelector('.input');
    var newItem = input.value;
    listItems.push(newItem);
    renderItem(newItem);
    input.value='';
    return false;
};