var form = document.getElementById("toDoForm");
var text = document.getElementById("toDoText");
let list = document.getElementById("toDoList");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    CreateNewItem(text.value);
})

function CreateNewItem(newItem){
    var newListItem = `<li> ${newItem} <button onclick="DeleteItem(this)">Delete</button></li>`
    //add items to the end of list 
    list.insertAdjacentHTML("beforeend",newListItem);
    //clear data after submit
    text.value = "";
    text.focus();
}

//delete list Item that specified
function DeleteItem(itemToDelete){
    itemToDelete.parentElement.remove();
}