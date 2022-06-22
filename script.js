var items = [];      //item holder
var listHolder = document.getElementById('list-holder');        //list holder
var addTodo = document.getElementById('add-todo');          //add ToDo button

//adding a loadList function to populate my to do list
loadList = function()
{
    listHolder.innerHTML = "";      //clearing the listHolder anytime I call this function
    items.forEach((element, index) => {
        let listItem = document.createElement('li');        //creating a List Item element when adding an item to the list
        listItem.className = "list-group-item todo-list";   //setting up the classes for the elements
        listItem.innerHTML = element;                       //setting up its inner HTML

        //adding an eventListener for each item
        listItem.addEventListener('click', function(){
            listItem.classList.toggle("done");              //item gets crossed-out and greyed-out when clicked
        });

        //adding an eventListener to remove items
        listItem.addEventListener("dblclick", function(){
            items.splice(index, 1);                         //splice method to remove the item defined by the index, 1 because I'll only remove one item
            loadList();                                     //after removing an item, the list gets refreshed    
        })
        
        listHolder.appendChild(listItem);                   //appending item to the listHolder
    });
}

//adding an event listener on my ToDo button
addTodo.addEventListener('click', function(){
    let txtTodo = document.getElementById('txt-todo-name');     //value of text input
    let todoName = txtTodo.value;          //value of text input

    if(todoName != ""){                         //if I input text: todoName goes into my "items" array
        items.push(todoName);       
        txtTodo.value = "";
        console.log("Item added!");
        loadList();
    }else{                                      //if I get input no text: alert
        alert("You must provide an item!");
    }
});