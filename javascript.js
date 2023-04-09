const rpsButton_button = document.getElementById(`rpsButton`);
rpsButton_button.addEventListener(`click`, function(){
    open(`https://kbouti.github.io/rock-paper-scissors/`);
})

const gridBox_div = document.getElementById(`gridBox`);

function createSmallBox(n){
    let smallBox_div = document.createElement(`div`);
    smallBox_div.classList.add(`smallBox`);
    smallBox_div.id.add()
}








function createSmallBox (){
    const smallBox_div = document.createElement(`div`);
    smallBox_div.classList.add(`smallBox`)
    gridBox_div.appendChild(smallBox_div);

}
function makeBoxes(n){
    for (i = 0; i < n; i++){
    createSmallBox();
    }
}

makeBoxes(256);



