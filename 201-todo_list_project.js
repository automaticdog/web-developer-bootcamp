// Requirements:

//   1. Top-level prompt
//     - "what would you like to do?" 
//     - Takes an action from: "new", "list", "delete", "quit"
//   2. "New":
//     - Prompt: "Enter new todo item:"
//     - Stores user input to the list
//     - After hitting "ok", goes back to the top-level prompt
//   3. "List":
//     - Lists current index + value of "todoItems" array
//     - format: "********
//               0: Some item text"
//               ********"
//   4. "Delete":
//     - Prompt: "Enter index of item to delete"
//     - Accepts only numbers
//     - Deletes specified item out of "todoItems" array
//     - Logs toast message "Todo removed"
//   5. "Quit":
//     - Exits the "app" (break the top-level prompt loop)

function todoApp() {
  let isActive = true;
  const todoItems = ["test1", "test2", "test3", "test4"];
  let validActions = ["new", "list", "delete", "quit"]
  while (isActive === true) {
    let currentAction = prompt(`What would you like to do? You can try:
      "New": Add new todo
      "List": List current todos
      "Delete": Delete some todos
      "Quit": Quit the app`)
    if (validActions.indexOf(currentAction.toLowerCase()) == -1) {
      currentAction = prompt("Oops! I don't know how to do that. You can say: 'New', 'List', 'Delete', or 'Quit'")
    } else {
      if (currentAction.toLowerCase() == "new") {
        todoItems.push(prompt("Enter new todo item:"))
      } else if (currentAction.toLowerCase() == "list") {
        if (todoItems.length == 0) {
          console.log("You have no todo items yet!")
        } else {
          console.log("*******")
          for (let item of todoItems) {
            console.log(`${todoItems.indexOf(item)}: ${item}`)
          }
          console.log("*******")
        }
      } else if (currentAction.toLowerCase() == "delete") {
        let deleted = prompt(`Enter index of item to delete, or enter "clear list" to delete all items:`);

        if (deleted.toLowerCase == "clear list") {
          console.log("clear list loop START")
          for (let item in todoItems) {
            todoItems.pop(item);
            console.log("clear list loop END")
          }
        } else if (deleted > todoItems.length || todoItems.indexOf(deleted) == -1) {
          console.log("item doesn't exist loop START")
          console.log("Looks like that item doesn't exist :/");
          console.log("item doesn't exist loop END")
        } else {
          console.log("delete single item loop START")
          todoItems.pop(parseInt(todoItems[deleted]));
          console.log("delete single item loop END")
        }
      } else if (currentAction.toLowerCase() == "quit") {
        console.log("Ok, quitting the app!")
        isActive = false;
      }
    }
  }
}