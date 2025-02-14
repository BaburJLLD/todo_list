//Adds text to todo list - if not empty
document.getElementById("add").addEventListener("click", function() {
        var task = document.getElementById("task").value;
        if(task){
            addNewTask(task);
            document.getElementById("task").value = "";
        }
    
});

function addNewTask(item){
    var list = document.getElementById("tasklist");

    var newtask = document.createElement("li");
    newtasktask.innerText = item;

    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    //creates remove and complete buttons + add classes
    var remove = document.createElement("button");
    remove.classList.add("delete");
    remove.addEventListener("click", removeItem);
    
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.addEventListener("click", completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    newtask.appendChild(buttons);

    //insert new todo before the first element
    list.insertBefore(newtask, list.childNodes[0]);
}

//Removes item from todo list
function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

//Moves item to done list
function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentId = parent.id;
    var target = (parentId === "tasklist") ? document.getElementById("done") : document.getElementById("tasklist");
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

//add event listener to pre-made list items

var deleteIt = document.getElementsByClassName("delete");
for (var i = 0; i < deleteIt.length; i++){
	deleteIt[i].addEventListener("click", removeItem);
}

var changeIt = document.getElementsByClassName("complete");
for (var i = 0; i < changeIt.length; i++){
	changeIt[i].addEventListener("click", completeItem);
}