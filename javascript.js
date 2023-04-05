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




smallbox_div[0].addEventListener('click', function(){
    console.log(`clicked`)
    if (smallbox_div[0].classList.contains(`clicked`)){
        deActivateBox(0);
    }
    else {
    activateBox(0);
    }
})

smallbox_div[1].addEventListener('click', function(){
    console.log(`clicked`)
    if (smallbox_div[1].classList.contains(`clicked`)){
        deActivateBox(1);
    }
    else {
    activateBox(1);
    }
})
/*      setTimeout(deActivateBox(1), 300);

*/


function clearBoxes(){
    smallbox_div[0].classList.remove(`clicked`);
    smallbox_div[1].classList.remove(`clicked`);

}