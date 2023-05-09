const container = document.querySelector('.container')
function squares (nums =8) {
    let square = document.querySelectorAll('.sq');
    if (container.querySelectorAll('.sq')) {
        for (let sq of square) {
        sq.remove();
        }
    }
    console.log(nums)
    let n = (480/nums) -1;
    console.log(n)
    for (let num = 0; num < (nums * nums); num++){
        let newDiv = document.createElement('div');
        // newDiv.textContent = num+1;
        newDiv.classList.add('sq')
        newDiv.style.flexBasis = `${n}px`;
        container.appendChild(newDiv);
    }
}

window.addEventListener('DOMContentLoaded', squares(32))
// window.setTimeout((()=>squares(32)), 3000);
let square = document.querySelectorAll('.sq');
console.log(square);

// Converting using Spread syntax
let sqArr = [...square];
for (let sqA of sqArr) {
    sqA.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = '#555';
        }
    )
}