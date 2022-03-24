// The Controller Function
//Get the values from the user. This function is called on the app.html file to intiate the application on the submit button click. 
function getValues() {
    // Get the values from the user input
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // parse user inputs to change them to type integer
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // validate that the values are integers. If so, proceed normally. If not, request integers from the user in an alert.
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // since the return value of fizzBuzz will be passed to displayValues,save the return value in a variable
        let response = fizzBuzz(startValue, endValue);
        // Pass in the returned value from fizzBuzz into displayValues. This will complete the application.
        displayValues(response);
    } else {
        alert("Please enter only integer numbers.")
    }

}


// The Logic Function
// Pass in the User's values into our function. Create a return array. Iterate through the user's array with the conditions to display the number value, "Fizz", "Buzz", or "Fizz Buzz" depending on the conditionals.
function fizzBuzz(startValue, endValue) {
    // Declare the variable to be returned. This will be mutated throughout the execution.
    let returnArray = [];
    // Iterate over each value between the startValue and endValue with conditional statements that will push the proper value into the returnArray.
    for (let i = startValue; i <= endValue; i++){
        if (i % 3 === 0 && i %5 === 0) {
            returnArray.push("Fizz Buzz");
        } else if (i % 3 === 0) {
            returnArray.push("Fizz");
        } else if(i % 5 === 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}


// The View Function
// Pass in an array that will be displayed to the user in the results table.
function displayValues (response) {
    // create a variable of an empty string that will be built up within the for loop. This will create the string that will be placed into the HTML.
    let tableBody = "";

    //  loop through the response Array and add a template literal together for each value to place into the app.html at the element with the id of "results"
     for(let i = 0; i < response.length; i++) {
         
        let dataOut = response[i];
        tableBody += `<tr><td>${dataOut}</td></tr>`;
     }
    
     document.getElementById("results").innerHTML = tableBody;
}
