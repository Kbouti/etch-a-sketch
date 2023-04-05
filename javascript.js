const smallbox_div = document.getElementsByClassName(`innerBox`);
const rpsButton_button = document.getElementById(`rpsButton`);





rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})




function activateBox(i){
    smallbox_div[i].classList.add(`clicked`);
}


function deActivateBox(i){
    smallbox_div[i].classList.remove(`clicked`);
}









function clearBoxes(){
    smallbox_div[0].classList.remove(`clicked`);
    smallbox_div[1].classList.remove(`clicked`);

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