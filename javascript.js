const newDiv = document.createElement(`div`);

newDiv.classList.add(`redBox`);

document.body.appendChild(newDiv);

const body =document.querySelector(`body`);

body.addEventListener(`click`, function(){
    console.log(`You clicked me`)
    const buttonMade = document.createElement(`div`);
    buttonMade.classList.add(`greenBox`);
    document.body.appendChild(buttonMade);
})

console.log(`did I make an optical illusion?`);