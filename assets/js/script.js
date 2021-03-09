var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");
var pageContentEl = document.querySelector("#page-content");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  // check if task is new or one being edited by seeing if it has a data-task-id attribute
  var isEdit = formEl.hasAttribute("data-task-id");

  if (isEdit) {
    var taskId = formEl.getAttribute("data-task-id");
    completeEditTask(taskNameInput, taskTypeInput, taskId);
  } else {
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };






  createTaskEl(taskDataObj);
}
};

var createTaskEl = function(taskDataObj) {
 //adding the tasks under Tasks To Do
 var listItemEl = document.createElement("li");
 listItemEl.className = "task-item";
 
 //add task id as a custom attribute 
 listItemEl.setAttribute("data-task-id", taskIdCounter);
 console.log(listItemEl);

 var taskInfoEl = document.createElement("div");
 taskInfoEl.className = "task-info";
 taskInfoEl.innerHtml = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);

 tasksToDoEl.appendChild(listItemEl);

 //increase task counter for next unique id
 taskIdCounter++;
};

//buttons and dropdowns under tasks
  var createTaskActions = function(taskId) {
    //create container to hold elements
var actionContainerEl = document.createElement("div");
actionContainerEl.className = "task-actions";

 //create edit button
 var editButtonEl = document.createElement("button"); //creating the button element
 editButtonEl.textContent = "Edit"; //adding the text "Edit" to the button
 editButtonEl.className = "btn edit-btn"; //adding the class name
 editButtonEl.setAttribute("data-task-id", taskId);
 
 actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

 

 return actionContainerEl;
};





var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  console.dir(listItemEl);

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
