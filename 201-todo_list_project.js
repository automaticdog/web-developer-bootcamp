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