const prompt = require("prompt-sync")({ sigint: true });

//----------VARIABLES--------------//

let todoList = [
  { number: 1, text: "jogging", done: false },
  { number: 2, text: "cleaning", done: true },
  { number: 3, text: "live code", done: false },
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

let insertTodo = () => {
  let taskInput = prompt("Enter a new task: ");
  todoList.push({ number: todoList.length + 1, text: taskInput, done: false });
  pendingTodo();
  mainFunction();
};

// Update Items

let updateTodo = () => {
  let taskNum = +prompt("Which task number you want to update? ");
  let found = todoList.find((elemenet) => elemenet.number === taskNum);
  found.done = true;
  doneTodos();
  mainFunction();
};

//Remove Item
let removeTodo = () => {
  let deleteNum = +prompt("Enter the number of task you want to delete: ");
  todoList = todoList.filter((element) => element.number !== deleteNum);
  if (!todoList.length) {
    console.log(`To do list is empty!`);
    mainFunction();
    // return;
  }
  console.table(todoList);
  mainFunction();
};

//Edit Item
let editTodo = (taskEdit, taskText) => {
  todoList.find((el) => el.number === taskEdit).text = taskText;
  console.table(todoList);
  mainFunction();
};

//filter Items

//create function to display all pending todos
let pendingTodo = () => {
  let stillTodo = todoList.filter((element) => element["done"] === false);
  console.table(stillTodo);
  mainFunction();
};

//create function to display all done todos
let doneTodos = () => {
  let doneTodo = todoList.filter((element) => element["done"] === true);
  console.table(doneTodo);
  mainFunction();
};

//-----------------MAIN PART------------------//

let mainFunction = () => {
  for (const item of commandList) {
    console.log(`${item["id"]}: ${item["text"]}`);
  }

  let input = +prompt("Enter a command number: ");
  switch (input) {
    case 1: //show to do list
      if (!todoList.length) {
        console.log(`To do list is empty!`);
        break;
      }
      console.table(todoList);
      mainFunction();
      break;

    case 2: //delete any todo
      console.table(todoList);
      removeTodo();

      break;

    case 3: //Update items as done
      updateTodo();
      break;

    case 4: //show pending todos //console log the tasks with done property false
      pendingTodo();
      break;

    case 5: //show done todos //done property true
      doneTodos();
      break;

    case 6: //adding new TODO item //Don’t allow adding empty items
      insertTodo();
      break;

    case 7: //editing any task
      console.table(todoList);
      let taskEdit = +prompt("Enter the number of task you want to change: ");
      let taskText = prompt("Change the task: ");
      editTodo(taskEdit, taskText);
      console.table(todoList);

    default:
      console.log("Enter a command number");
      break;
  }
};

mainFunction();
