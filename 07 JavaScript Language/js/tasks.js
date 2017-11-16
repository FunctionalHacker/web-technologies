// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // For the output:
    var message = '';

    if (task.value) {

        // Add the item to the array:
        tasks.push(task.value);

        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

    } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;

function removeDuplicates() {
    'use strict';
    console.log("test");
    for (var i=0; i<=tasks.length; i++){
        var duplicate= tasks[i];

        for (var y=0; y<tasks.length; y++){
            var duplicates = tasks[y];

            if(duplicate == duplicates && i != y){
                tasks.splice(y,1);
                console.log("duplicate(s) removed");
            }
        }
    }
    var output = document.getElementById('output');
    var message = '';
    message = '<h2>To-Do</h2><ol>';
    for (var x = 0, count = tasks.length; x < count; x++) {
        message += '<li>' + tasks[x] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
}
