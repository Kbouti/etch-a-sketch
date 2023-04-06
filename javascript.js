const smallbox_div = document.getElementsByClassName(`innerBox`);
const rpsButton_button = document.getElementById(`rpsButton`);
const gridBox_div = document.getElementById(`gridBox`);
const clearButton_button = document.getElementById(`clearButton`);



rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})
clearButton_button.addEventListener(`click`, clearBoxes);
function activateBox(i){
    smallbox_div[i].classList.add(`clicked`);
}
function deActivateBox(i){
    smallbox_div[i].classList.remove(`clicked`);
}
function clearBoxes(){
    for(let i = 0; i < 17; i++){
        deActivateBox(i);
    }
}





function createSmallBox (){
    const smallBox = document.createElement(`div`);
    smallBox.classList.add(`smallBox`)
    gridBox_div.appendChild(smallBox);

}
function makeBoxes(n){
    for (i = 0; i < n; i++){
    createSmallBox();
    }
}

makeBoxes(256);



function click(i){
    if (smallbox_div[i].classList.contains(`clicked`)){
        deActivateBox(i);
    } else {
        activateBox(i);
    }
}  



smallbox_div[0].addEventListener('click', click(0));

