// The Controller Function
//Get the values from the user. This function is called on the app.html file to intiate the application on the submit button click. 
function getValues() {
    // Get the values from the user input
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse user inputs to change them to type integer
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // validate that the values are integers. If so, proceed normally. If not, request integers from the user in an alert.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // since the return value of fizzBuzz will be passed to displayValues,save the return value in a variable
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        // Pass in the returned value from fizzBuzz into displayValues. This will complete the application.
        displayData(fbArray);
    } else {
        alert("Please enter only integer numbers.")
    }

}


// The Logic Function
// Pass in the User's values into our function. Create a return array. Iterate through the user's array with the conditions to display the number value, "Fizz", "Buzz", or "Fizz Buzz" depending on the conditionals.
function fizzBuzz(fizzValue, buzzValue) {
    // Declare the variable to be returned. This will be mutated throughout the execution.
    let returnArray = [];
    // Iterate over each value between the startValue and endValue with conditional statements that will push the proper value into the returnArray.
    for (let i = 1; i <= 100; i++){
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            returnArray.push("FizzBuzz");
        } else if (i % fizzValue === 0) {
            returnArray.push("Fizz");
        } else if(i % buzzValue === 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}


// The View Function
// Pass in an array that will be displayed to the user in the results table.
function displayData(fbArray) {
    // get the table body element from page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        // create an array of all "td" values from the tableRow variable, which is templateRow within the HTML
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];
        
        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];
        
        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];
        
        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];
        
        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }
}
