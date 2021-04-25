'use strict'
let winner=null;
const playingObjects=["paper","stone","lizard","scissor","spock"];
var objectIndex = Math.floor(Math.random() * playingObjects.length);
var systemInput=playingObjects[objectIndex];
console.log(systemInput);
function gameLogic(userInput,systemInput)
{
        if (arguments.contains("stone") && arguments.includes("paper"))
            winner="paper"
        if (arguments.includes("stone") && arguments.includes("scissor"))
            winner="stone" 
        if (arguments.includes("stone") && arguments.includes("lizard"))
            winner="stone"     
        if (arguments.includes("stone") && arguments.includes("spock"))
            winner="spock"
        if (arguments.includes("scissor") && arguments.includes("paper"))
            winner="scissor"
        if (arguments.includes("scissor") && arguments.includes("lizard"))
            winner="scissor"
        if (arguments.includes("scissor") && arguments.includes("spock"))
            winner="spock"
        if (arguments.includes("lizard") && arguments.includes("paper"))
            winner="lizard"
        if (arguments.includes("lizard") && arguments.includes("spock"))
            winner="lizard"
        if (arguments.includes("spock") && arguments.includes("paper"))
            winner="paper"
        if(arguments[0]===arguments[1])
            winner="draw"
    if (winner===userInput)
    {
        //user won
    }
    else if(winner==="draw")
    {
        //draw
    }
    else if(winner===systemInput)
    {
        //system won
    }
    console.log(winner);
}
//reading from index
var rulesBtn=document.querySelector(".rulesbutton");
var rules=document.querySelector(".rules");
var overlay=document.querySelector(".overlay")
var closeBtn=document.querySelector(".closerules")
const scissors=document.querySelector(".scissors");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const lizard=document.querySelector(".lizard");
const spock=document.querySelector(".spock");
rulesBtn.addEventListener("click",function(){
    console.log("clicked rules")
    rules.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
closeBtn.addEventListener("click",function(){
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
});
gameLogic("scissors",systemInput);
// scissors.addEventListener("click",gameLogic("scissor",systemInput))

