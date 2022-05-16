const prompt = require("prompt-sync")({ sigint: true });

//----------VARIABLES--------------//

let todoList = [
  { id: 1, text: "jogging", done: false },
  { id: 2, text: "cleaning", done: true },
  { id: 3, text: "live code", done: false },
];

let commandList = [
  { id: 1, text: "Show to do list" },
  { id: 2, text: "Delete any TODO" },
  { id: 3, text: "Update items as done" },
  { id: 4, text: "Show number of tasks left to do" },
  { id: 5, text: "Show done TODO's tasks" },
  { id: 6, text: "Add new TODO task" },
  { id: 7, text: "Edit any task" },
];

//----------FUNCTIONS-------------//

// Add item

let insertTodo = function (taskInput) {
  todoList.push({ id: todoList.length + 1, text: taskInput, done: false });
  pendingTodo();
  mainFunction();
};

// Update Items

let updateTodo = function (taskNum) {
  todoList[taskNum - 1].done = true;
  doneTodos();
  mainFunction();
};

//Remove Item
let removeTodo = function (deleteNum) {
  todoList = todoList.filter((element) => element.id !== deleteNum);
  console.table(todoList);
  mainFunction();

  //another option:
  // let ourTask;
  // let index = todoList.findIndex(el => el.id === deleteNum);
  // console.log(index);
  // todoList.splice(index,1);

  //another try, long one:
  // for (const item of todoList) {
  //     if(item["id"]===deleteNum){
  //         ourTask = item;
  //     }
  // }
};

//Edit Item
let editTodo = function (taskEdit, taskText) {
  let index = todoList.findIndex((el) => el.id === taskEdit);
  console.log(index);
  todoList[index].text = taskText;
  console.table(todoList);
  mainFunction();
};

//filter Items

//create function to display all pending todos
let pendingTodo = function () {
  let stillTodo = todoList.filter((element) => element["done"] === false);
  console.table(stillTodo);
  mainFunction();
};

//create function to display all done todos
let doneTodos = function () {
  let doneTodo = todoList.filter((element) => element["done"] === true);
  console.table(doneTodo);
  mainFunction();
};

//-----------------MAIN PART------------------//

let mainFunction = function () {
  for (const item of commandList) {
    console.log(`${item["id"]}: ${item["text"]}`);
  }

  let input = +prompt("Enter a command number: ");
  switch (input) {
    case 1: //show to do list
      for (const item of todoList) {
        console.table(`Task ${item["id"]}: ${item["text"]}`);
      }
      break;

    case 2: //delete any todo
      let deleteNum = +prompt("Enter the number of task you want to delete: ");

      removeTodo(deleteNum);
      break;

    case 3: //Update items as done
      let taskNum = +prompt("Which task you want to update? ");
      updateTodo(taskNum);
      break;

    case 4: //show pending todos //console log the tasks with done property false
      pendingTodo();
      break;

    case 5: //show done todos //done property true
      doneTodos();
      break;

    case 6: //adding new TODO item //Don’t allow adding empty items
      let taskInput = prompt("Enter a new task: ");
      insertTodo(taskInput);
      break;

    case 7: //editing any task
      console.table(todoList);
      let taskEdit = +prompt("Enter the id of task you want to change: ");
      let taskText = prompt("Enter the new task: ");
      editTodo(taskEdit, taskText);
      console.table(todoList);

    default:
      console.log("Enter a command number");
      break;
  }
};

mainFunction();
