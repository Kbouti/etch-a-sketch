const innerBox_div = document.getElementsByClassName(`innerBox`);
/*
innerBox_div.addEventListener(`click`, function(){
    console.log(`hover`);
})
*/



const standAlone_div = document.querySelector(`.standAlone`);

standAlone_div.addEventListener('click', function(){
    console.log(`clicked standAlone`);
})

standAlone_div.addEventListener("mouseover", function(){
    console.log(`hovered`);
})