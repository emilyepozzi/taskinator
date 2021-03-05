var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();

  var listItemEl = document.createElement("li"); //creating a list item. 
  listItemEl.className = "task-item"; //creating a class for the list item
  listItemEl.textContent = "This is a new task."; // in that list items class you are placing text content that says, "This is a  new task"
  tasksToDoEl.appendChild(listItemEl); // taskToDoEl is using the unordered list in HTML. Assigning the appendChild. Adding the variable to be used in the function  
};

formEl.addEventListener("submit", createTaskHandler);
