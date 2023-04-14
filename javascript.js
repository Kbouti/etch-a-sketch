const rpsButton_button = document.getElementById(`rpsButton`);
const gridBox_div = document.getElementById(`gridBox`);
const smallBox_div = document.getElementsByClassName(`smallBox`);
const clearButton_div = document.getElementById(`clearButton`);
const resizerButton_button = document.getElementById(`resizerButton`);
const controlForm_form = document.getElementById(`controlForm`);

rpsButton_button.addEventListener(`click`, () => open(`https://kbouti.github.io/rock-paper-scissors/`))
clearButton_div.addEventListener(`click`, clearBoxes)
resizerButton_button.addEventListener(`click`, userInputSize)
controlForm_form.addEventListener(`submit`, function(event){  //This allows user to submit by clicking the resizer button or hitting enter
    event.preventDefault();
});

const tealButton_input = document.getElementById(`tealButton`);
const coralButton_input = document.getElementById(`coralButton`);
const marigoldButton_input = document.getElementById(`marigoldButton`);

const purpleButton_input = document.getElementById(`purpleButton`);
const greenButton_input = document.getElementById(`greenButton`);


const rainbowButton_input = document.getElementById(`rainbowButton`);
const eraserButton_input = document.getElementById(`eraserButton`);


const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);



const teal = `rgb(34, 202, 202)`;
const coral = `rgb(255, 127, 80)`;
const marigold = `rgb(236, 213, 41)`;
const purple = `rgb(199, 138, 243)`;
const green = `rgb(81, 130, 53)`;
const rainbow = `rgb(${r},${g},${b})`;
const eraser = `white`;
let paintColor = teal;



tealButton_input.addEventListener('click', ()=> paintColor = teal)
coralButton_input.addEventListener('click',  ()=> paintColor = coral)
marigoldButton_input.addEventListener('click',  ()=> paintColor = marigold)
purpleButton_input.addEventListener('click',  ()=> paintColor = purple)
greenButton_input.addEventListener('click',  ()=> paintColor = green)
rainbowButton_input.addEventListener('click',  ()=> paintColor = rainbow)
eraserButton_input.addEventListener('click',  ()=> paintColor = eraser)





function makeElements(n){
    for (i=0; i <= n; i++){
        const newElement = document.createElement(`div`);
        newElement.classList.add(`smallBox`);

        newElement.addEventListener('mouseover', function(){
            newElement.style.backgroundColor = paintColor;
        })

        gridBox_div.appendChild(newElement);
    }
}

function makeGrid(size){
    gridBox_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearBoxes(){                                  //This will apply the style properties, overriding any class that was set. Now have to make the click or hover effects do thte same. 
    for (let i =0 ; i < smallBox_div.length; i++){ 
        smallBox_div[i].style.background = "white";
        smallBox_div[i].style.boxShadow = "none";
    }
}

function removeBoxes(){
    let board = document.querySelector(`#gridBox`);
    let boxes = board.querySelectorAll(`div`);
    boxes.forEach((div) => div.remove());
}


function makeBoard(input){              //Removed redundant clearBoxes command
    removeBoxes(); 
    makeGrid(input);
    makeElements(input * input);
}


function userInputSize(){
    let sizeInput = document.getElementById(`inputBox`).value;
    if ((isNaN(sizeInput)) || (sizeInput < 1) || (sizeInput > 100)){
        alert(`Please enter a number between 1-100`);
    }
    else {
        makeBoard(sizeInput);
    }
}


makeBoard(16);

