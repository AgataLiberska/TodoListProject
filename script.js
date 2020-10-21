//Create a variable to hold all Todos
const todos = [];

//Create a variable to hold user input
let input = prompt("What would you like to do?");

//Process input
//Unless  user wants to quit, we're looping!
while (input !== "quit" && input !== "q") {
    //if user wants to add a new todo, push it into the array
    if (input === "new") {
        let newTodo = prompt("Add a new Todo")
        todos.push(newTodo);
        console.log(`${newTodo} added to Todo List`);
    }
    //if user wants to list all todos, print them to console
    else if (input === "list") {
        console.log("*******************");
        todos.forEach(function(todo, i) {
            console.log(`${i}: ${todo}`);
        })
        console.log("*******************")
    }
    //if user wants to delete a todo, ask for index and delete
    else if (input === "delete") {
        let index = parseInt(prompt("Which index would you like to delete?"));
        //we have to make sure that user entered a number or splice() defaults index to 0
        if(!Number.isNaN(index)) {
            let removed = todos.splice(index, 1);
            console.log(`Ok, ${removed} was removed from Todo List`)
        } else {
            console.log("Unknown index")
        }

    }
    //ask for input again
    input = prompt("What would you like to do?")
}

//if user wants to quit, print confirmation to console
console.log("OK, you quit the App.")