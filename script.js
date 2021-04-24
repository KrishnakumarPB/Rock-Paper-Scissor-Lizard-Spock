'use strict'
let winner=null;
const playingObjects=["paper","stone","lizard","scissor","spock"];
var objectIndex = Math.floor(Math.random() * playingObjects.length);
var systemInput=playingObjects[objectIndex];
function gameLogic(userInput,systemInput)
{
        if (arguments.includes("stone") && arguments.includes("paper"))
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
}

