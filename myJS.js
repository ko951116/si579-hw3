/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const colorName = document.querySelector('#color-name');
const colorBlock = document.querySelector('#color-block');
const CLICKED_CLASS = "clicked";


function changeColor() {
    //Write a condition determine what color it should be changed to
    const hasClass = colorBlock.classList.contains(CLICKED_CLASS);

    if(hasClass){
        //change the background color using JS

        //Change the text of the color using the span id color-name

        colorBlock.style.backgroundColor = "#F08080";
        colorName.textContent = '#F08080';
        colorBlock.classList.remove(CLICKED_CLASS);
    }
    else{
        //change the background color using JS

        //Change the text of the color using the span id color-name

        colorBlock.style.backgroundColor = "yellow";
        colorName.textContent = '#FFFF00';
        colorBlock.classList.add(CLICKED_CLASS);
    }
}

function init(){
    colorBlock.addEventListener("click", changeColor)
}
init();



/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertBtn = document.querySelector('#convertbtn');


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here

    //Send the calculated temperature to HTML
    convertBtn.addEventListener("click", function(){
        var tempF = document.querySelector("#f-input").value;
        var tempC = (tempF - 32) * 5/9;
        document.querySelector("#c-output").innerHTML = tempC;
    });
}

convertTemp();