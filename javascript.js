const rpsButton_button = document.getElementById(`rpsButton`);
rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})

const gridBox_div = document.getElementById(`gridBox`);
const smallBox_div = document.getElementsByClassName(`smallBox`);


//create an element
//apply name
//apply class
//apply event listeners




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


function onHover(i){
    console.log(`hovered box ${i}`)
    //smallBox_div[i]
}





makeElements(256);



function addListenerToBox(n){
    smallBox_div[n].addEventListener('click', function(){
        if (smallBox_div[n].classList.contains(`clicked`)){
            smallBox_div[n].classList.remove(`clicked`);
        }
        else {
            smallBox_div[n].classList.add(`clicked`);
        }
    })
}



for (i = 0;i < smallBox_div.length; i++){
    addListenerToBox(i);
}











/*

function createSmallBox(n){
    const smallBox = document.createElement(`div`);
    smallBox.classList.add(`smallBox`);
    smallBox.setAttribute(`id`, `smallBox${n}`)
    gridBox.appendChild(smallBox);

}
function makeBoxes(n){
    for (i = 0; i < n; i++){
    createSmallBox(n);
    }
}

makeBoxes(256);

function activateBox(n){
smallBox_div[n].addEventListener('mouseenter', function(){
    console.log(`hovered box ${n}`);
    smallBox_div[n].classList.add(`hovered`);
})
smallBox_div[n].addEventListener('mouseleave', function(){
    console.log(`left box ${n}`);
    smallBox_div[n].classList.remove(`hovered`);
})
}

activateBox(0);

function activateAllBoxes(n){
    for (i = 0; i <=n;i++){
        activateBox(n);
    }
}

activateAllBoxes(256);

*/