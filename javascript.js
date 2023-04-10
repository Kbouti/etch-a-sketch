const rpsButton_button = document.getElementById(`rpsButton`);
rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})

const gridBox_div = document.getElementById(`gridBox`);
const smallBox_div = document.getElementsByClassName(`smallBox`);
const clearButton_div = document.getElementById(`clearButton`);

function makeElement(){
    const newElement = document.createElement(`div`);
    newElement.classList.add(`smallBox`);
    gridBox_div.appendChild(newElement);
}

function makeElements(n){
for (i=0; i <= n; i++){
    makeElement()
}
}

makeElements(256);

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
}

for (i = 0;i < smallBox_div.length; i++){
    addClickListenerToBox(i);
    addHoverListenerToBox(i);
}
