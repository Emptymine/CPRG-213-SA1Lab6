/*
***************** YOUR NAME: Chi Wai Tsui (Gordon) Student ID: 000911705

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

// perset the model name as "XYZ" since the html by default using Model XYZ
let modelName = "XYZ";
// preset the duraion period as 0 as I don't want the calcution run if the user not entering the duration period. 
let period=0;



/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

//Using else if here instead of just simply else to play a safe gurade in case of some unwanted changed of the code make typo error
function recalculate(){
    let costLabel = document.getElementById("calculated-cost");
    if (modelName ==="XYZ"){
        costLabel.innerHTML = period * 100;
    }else if(modelName === "CPRG"){
        costLabel.innerHTML = period * 213;
    }
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel)

// INSERT YOUR CODE HERE
let modelButton = document.getElementById("model-button");

function changeModel(){
    let modelText= document.getElementById("model-text");
    if(modelName==="CPRG"){
        modelName = "XYZ";
        modelText.innerText = "Model XYZ";
    }else if(modelName === "XYZ"){
        modelName = "CPRG";
        modelText.innerText = "Model CPRG";
    }
    recalculate();
    
}

//Since the declaration of the modelButton object is just before the function, this eventlistener have to be after the declaration instead of comment out the line provided in the commend. 
modelButton.addEventListener("click",changeModel);



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE


let changeButton = document.getElementById("duration-button");
function changeDuration(){
    let durationShow = document.getElementById("duration-text");
    period = prompt("Please enter your rental period:");
    durationShow.innerHTML =period;
    recalculate();
}
changeButton.addEventListener("click",changeDuration);
