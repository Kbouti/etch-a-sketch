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



let paintColor = `rgb(34, 202, 202)`;



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

