# TODO - App - Terminal

1. Add new todo item
2. Update items as done
3. Delete items
4. Filter items (done/not done)
5. Show number of items left to do
6. Show done todos
7. Don’t allow adding empty items

## ToDo List (e.g) :

_1- Shopping;_

_2- Meet with PR department;_

_3- Pay bills;_ 

_4- By milk;_

_5- Visiting Tommy;_

_6- Check the internet connection;_

_7- Go to supermarket;_

_8- Meet with Ghassan;_

_9- New test_

# Create TODOs App

_Create functions:_

1. Add item:

   - create function to Insert new items to toDosStore

2. Update Items:

   - create function to change status of todos

3. Remove Item

   - create function to remove any item by order number
   - the function takes one Argument as item order number

4. Edit Item

   - create function to edit any item by order number
   - the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value

5. Filter Items

   - create function to display all pending todos
   - create function to display all done todos

6. Read TodosList

   - RenderToDosListTemplate function -> this function prints the end Results as string template.
   - check if toDosStore is empty return a message (To do list store is empty) / else return todos template

_Call Stack_

    insertTodo("test1");
    insertTodo("test2");
    insertTodo("test4");
    insertTodo("test5");
    removeTodo(3);
    removeTodo(5);
    updateTodo(2);
    insertTodo("Call Alex");
    editTodo(3, "Pay bills");
    editTodo(5, "Visiting Tommy");
    pendingTodo();
    doneTodos();``

- Render to do template 

      console.log(RenderToDosListTemplate()); // toDosStore is empty ==> To do list is empty

