//Adds text to todo list - if not empty
document.getElementById("add").addEventListener("click", function() {
        var task = document.getElementById("task").value;
        if(task){
            addNewTask(task);
            document.getElementById("task").value = "";
        }
    
});

function removeItem(){
    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completeItem(){
    var item = this.parentNode;
    var parent = item.parentNode;
    var parentId = parent.id;
    var target = (id === "list") ? document.getElementById("completed") : document.getElementById("list");
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

//Adds new item to todo list
function addNewTask(item){
    var list = document.getElementById("list");
    var task = document.createElement("li");
    task.innerText = item;
    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    //creates remove and complete buttons + add classes
    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.addEventListener("click", removeItem);
    
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.addEventListener("click", completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    task.appendChild(buttons);

    //insert new todo before the first element
    list.insertBefore(task, list.childNodes[0]);

    //add event listener to pre-made list items
    var deleteButtons = document.getElementsByClassName("remove");
    for(var i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", removeItem);
    }

    var changeButtons = document.getElementsByClassName("complete");
    for(var i = 0; i < changeButtons.length; i++){
        changeButtons[i].addEventListener("click", completeItem);
    }
}