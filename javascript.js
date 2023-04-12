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

function makeElements(n){
    for (i=0; i <= n; i++){
        const newElement = document.createElement(`div`);
        newElement.classList.add(`smallBox`);
        gridBox_div.appendChild(newElement);
    }
}

function makeGrid(size){
    gridBox_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearBoxes(){
    for (let i =0 ; i < smallBox_div.length; i++){
        smallBox_div[i].classList.remove(`clicked`, `hovered`);
    }
}

function removeBoxes(){
    let board = document.querySelector(`#gridBox`);
    let boxes = board.querySelectorAll(`div`);
    boxes.forEach((div) => div.remove());
}


function makeBoard(input){
    clearBoxes();
    removeBoxes(); 
    makeGrid(input);
    makeElements(input * input);
    addListeners();
}

function addClickListenerToBox(n){
    smallBox_div[n].addEventListener('click', function(){
        if (smallBox_div[n].classList.contains(`clicked`)){
            smallBox_div[n].classList.remove(`clicked`);
        }
        else {
            smallBox_div[n].classList.add(`clicked`);
        }
    })
}

function addHoverListenerToBox(n){
    smallBox_div[n].addEventListener('mouseenter',function(){
        smallBox_div[n].classList.add(`hovered`)
    } )
    smallBox_div[n].addEventListener('mouseleave', function(){
        smallBox_div[n].classList.remove('hovered');
    })
}

function addListeners(){
    for (i = 0;i < smallBox_div.length; i++){
        addClickListenerToBox(i);
        addHoverListenerToBox(i);
    }
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


