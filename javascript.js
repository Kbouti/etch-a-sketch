const smallbox_div = document.getElementsByClassName(`innerBox`);
const rpsButton_button = document.getElementById(`rpsButton`);

smallbox_div[0].addEventListener('click', function(){
    console.log(`clicked`)
    activateBox(0);
})

smallbox_div[1].addEventListener('click', function(){
    console.log(`clicked 1`)
    activateBox(1);
})






rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})




function activateBox(i){
    smallbox_div[i].classList.add(`hovered`);
}
