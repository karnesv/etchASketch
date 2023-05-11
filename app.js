const container = document.querySelector('.container')

window.addEventListener("DOMContentLoaded", squares(8), buttons(2), numInput())

function squares (nums =8) {
    let square = document.querySelectorAll('.sq');
    if (container.querySelectorAll('.sq')) {
        for (let sq of square) {
        sq.remove();
        }
    }
    // console.log(nums)
    let n = (640/nums);
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
    colorButton.textContent='Color';
    const blackButton = document.querySelectorAll('button')[1];
    blackButton.setAttribute('id', 'blackButton')
    blackButton.textContent='Black';
    // const shadeButton = document.querySelectorAll('button')[2];

    buttonClickEvent ()
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
    newCont.setAttribute('id','inputContainer');
    btnContainer.prepend(newCont);
    newCont.appendChild(newInputRange);
    newInputRange.after(newOutput);
    newInputRange.after(newLabel);
    newInputRange.addEventListener("input",(e)=>{
        newOutput.value=e.target.value;
        squares(e.target.value);
    })
    newOutput.addEventListener("input",(e)=>{
        newInputRange.value=e.target.value;
        squares(e.target.value);
    })   
}
let currentColor = 'black';
function setupMouseOverEvents() {
    const square = document.querySelectorAll(".sq");
    const sqArr = [...square];
    for (let sqA of sqArr) {
      sqA.addEventListener("mouseover", (e) => {
        if (currentColor === 'black') {
          e.target.style.backgroundColor = "#000";
        } else if (currentColor === 'color') {
          e.target.style.backgroundColor = getRandomColor();
        }
      });
    }
}
  
function buttonClickEvent () {
    // const btnContainer = document.querySelector('.buttons');
    const colorButton = document.querySelector('#colorButton');
    const blackButton = document.querySelector('#blackButton'); 
   
    blackButton.addEventListener('click', () => {
      currentColor = 'black';
    });
   
    colorButton.addEventListener('click', () => {
      currentColor = 'color';
      colorButton.style.backgroundColor = getRandomColor();
      colorButton.style.color = getRandomColor();
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*

Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

*/