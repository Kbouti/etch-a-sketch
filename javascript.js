const innerBox_div = document.getElementsByClassName(`innerBox`);

innerBox_div[0].addEventListener(`click`, function(){
    console.log(`clicked box`);
    innerBox_div[0].classList.add("hovered");
})








const standAlone_div = document.querySelector(`.standAlone`);

standAlone_div.addEventListener('click', function(){
    console.log(`clicked standAlone`);
})

standAlone_div.addEventListener("mouseover", function(){
    console.log(`hovered`);
})

