const container = document.querySelector('.container')

window.addEventListener("DOMContentLoaded", squares())

function squares (nums =4) {
    let square = document.querySelectorAll('.sq');
    if (container.querySelectorAll('.sq')) {
        for (let sq of square) {
        sq.remove();
        }
    }
    // console.log(nums)
    let n = (720/nums);
    // console.log(n)
    for (let num = 0; num < (nums * nums); num++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('sq')
        newDiv.style.flexBasis = `${n}px`;
        container.appendChild(newDiv);
    }
    
    setupMouseOverEvents()
}


function buttons(i) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('buttons')
    document.body.insertBefore(btnContainer, container)
    for (let j = 1; j <= i; ++j) {
        const newBtn = document.createElement('button');
        btnContainer.appendChild(newBtn);
    }
    const colorButton = document.querySelectorAll('button')[0];
    colorButton.setAttribute('id', 'colorButton')
    const blackButton = document.querySelectorAll('button')[1];
    blackButton.setAttribute('id', 'blackButton')
    const submitButton = document.querySelectorAll('button')[2];

    buttonClickEvent ()
}

function buttonClickEvent () {
    const btnContainer = document.querySelector('.buttons');
    const colorButton = document.querySelector('#colorButton');
    const blackButton = document.querySelector('#blackButton'); 
}

function numInput() {
    const btnContainer = document.querySelector('.buttons');
    const newInputRange = document.createElement('input');
    const newOutput = document.createElement('input');
    const newLabel = document.createElement('label');
    newLabel.classList.add('label');
    newLabel.textContent= 'Num of squares 8-99';
    newOutput.classList.add('input');
    newOutput.setAttribute('type', 'number');
    newInputRange.classList.add('input');
    newInputRange.setAttribute('type', 'range');
    newInputRange.setAttribute('value', '8');
    newInputRange.setAttribute('min', '8');
    newInputRange.setAttribute('max', '99');
    newOutput.setAttribute('min', '8');
    newOutput.setAttribute('max', '99');
    newOutput.setAttribute('value', '8');
    newInputRange.setAttribute('type', 'range');
    const newCont = document.createElement('div');
    newCont.setAttribute('id','#inputContainer');
    btnContainer.prepend(newCont);
    newCont.appendChild(newInputRange);
    newInputRange.after(newOutput);
    newInputRange.after(newLabel);

    // let range = document.querySelector("input[type=range]");
    // let number = document.querySelector('input[type=number]')
    newInputRange.addEventListener("input",(e)=>{
        newOutput.value=e.target.value;
        squares(e.target.value);
    })
    newOutput.addEventListener("input",(e)=>{
        newInputRange.value=e.target.value;
        squares(e.target.value);
    })   
}

function setupMouseOverEvents() {
    const square = document.querySelectorAll(".sq");
    const sqArr = [...square];
    for (let sqA of sqArr) {
      sqA.addEventListener("mouseover", mouseOverBlack);
    }
  }
  
function mouseOverBlack(e) {
    e.target.style.backgroundColor = "#000";
}

window.setTimeout((
    function(){squares(8), buttons(3), numInput()}
    ), 1000);


/*

Create a webpage with a 16x16 grid of square divs.

Create the divs using JavaScript.
Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
You need make the divs appear as a grid (versus just one on each line).
This is a perfect opportunity to apply what you have learned about flexbox.

Be careful with borders and margins, as they can adjust the size of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.

Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.
Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
Push your project to GitHub!

Extra Credit
Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value.
Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

*/