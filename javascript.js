const smallbox_div = document.getElementsByClassName(`innerBox`);
const rpsButton_button = document.getElementById(`rpsButton`);

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


function addListenerToBox(i){
    smallbox_div[i].addEventListener('click', function(){
        if (smallbox_div[i].classList.contains(`clicked`)){
            deActivateBox(i);
        }
        else {
        activateBox(i);
        }
    })
}

function applyAll() {
for (let i = 0; i < 17; i++) {
    addListenerToBox(i);

}
}
applyAll();

smallbox_div[4].addEventListener(`mouseenter`, function(){
    console.log(`mouse enter`);
})