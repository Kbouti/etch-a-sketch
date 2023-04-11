const rpsButton_button = document.getElementById(`rpsButton`);
rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})

const gridBox_div = document.getElementById(`gridBox`);
const smallBox_div = document.getElementsByClassName(`smallBox`);
const clearButton_div = document.getElementById(`clearButton`);

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
    let boxes = board.querySelectorAll(`div`)
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



clearButton_div.addEventListener(`click`, clearBoxes())





makeBoard(5);
