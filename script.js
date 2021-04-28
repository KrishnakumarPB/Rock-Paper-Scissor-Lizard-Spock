'use strict'
let winner=null;
const playingObjects=["paper","rock","lizard","scissor","spock"];
var objectIndex = Math.floor(Math.random() * playingObjects.length);
var systemInput=playingObjects[objectIndex];
var searchArray=[];
var searchEle="";
var currentScore=20;
var objectsUrl=
{
    "paper":"url('/images/icon-paper.svg')",
    "rock":"url('/images/icon-rock.svg')",
    "lizard":"url('/images/icon-lizard.svg')",
    "scissor":"url('/images/icon-scissors.svg')",
    "spock":"url('/images/icon-spock.svg')"
}
// console.log(systemInput);
//system input generator
function systemInputGenerator()
{
    objectIndex = Math.floor(Math.random() * playingObjects.length);
    return playingObjects[objectIndex];
}
//search arg function
function searchArg(searchEle)
{
    for (let i=0;i<=1;i++)
        {
            if (searchArray[i]===searchEle)
            {
                return true;   
            }      
        }
}
//gameLogic
function gameLogic(userInput,systemInput)
{

            console.log("entered inside game logic")
        if (searchArg("rock") && searchArg("paper"))
            winner="paper"
        if (searchArg("rock") && searchArg("scissor"))
            winner="rock" 
        if (searchArg("rock") && searchArg("lizard"))
            winner="rock"     
        if (searchArg("rock") && searchArg("spock"))
            winner="spock"
        if (searchArg("scissor") && searchArg("paper"))
            winner="scissor"
        if (searchArg("scissor") && searchArg("lizard"))
            winner="scissor"
        if (searchArg("scissor") && searchArg("spock"))
            winner="spock"
        if (searchArg("lizard") && searchArg("paper"))
            winner="lizard"
        if (searchArg("lizard") && searchArg("spock"))
            winner="lizard"
        if (searchArg("spock") && searchArg("paper"))
            winner="paper"
        if(arguments[0]===arguments[1])
            winner="draw"
    if (winner===userInput)
    {
        showWinner.textContent="YOU WIN";
        currentScore=currentScore+1;
        showScore.textContent=currentScore;
    }
    else if(winner==="draw")
    {
        showWinner.textContent="DRAW"
    }
    else if(winner===systemInput)
    {
        showWinner.textContent="YOU LOSE"
        currentScore=currentScore-1;
        showScore.textContent=currentScore;
    }
    console.log("user input="+userInput+"and systemInput="+systemInput)
    console.log("winner="+winner);
    
}
//reading from index
var rulesBtn=document.querySelector(".rulesbutton");
var rules=document.querySelector(".rules");
var overlay=document.querySelector(".overlay")
var closeBtn=document.querySelector(".closerules")
const scissors=document.querySelector(".scissor");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const lizard=document.querySelector(".lizard");
const spock=document.querySelector(".spock");
var showResult=document.querySelector(".afterselection");
var selectors=document.querySelector(".selectors");
const playAgain=document.querySelector(".playagain");
const userPicked=document.querySelector(".userpicked");
const systemPicked=document.querySelector(".systempicked")
var showWinner=document.querySelector(".winner");
var showScore=document.querySelector(".score");
selectors.classList.remove("hidden");
rulesBtn.addEventListener("click",function(){
    console.log("clicked rules")
    rules.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
closeBtn.addEventListener("click",function(){
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
});
scissors.addEventListener("click",function(){
    console.log("clicked scissor");
    var userInput="scissor";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-scissors.svg')";
    systemPicked.style.backgroundImage=objectsUrl[systemInput];
})
rock.addEventListener("click",function(){
    console.log("clicked rock");
    var userInput="rock";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-rock.svg')";
    systemPicked.style.backgroundImage=objectsUrl[systemInput];
})
paper.addEventListener("click",function(){
    console.log("clicked paper");
    var userInput="paper";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-paper.svg')";
    systemPicked.style.backgroundImage=objectsUrl[systemInput];
})
lizard.addEventListener("click",function(){
    console.log("clicked lizard");
    var userInput="lizard";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-lizard.svg')";
    systemPicked.style.backgroundImage=objectsUrl[systemInput];
})
spock.addEventListener("click",function(){
    console.log("clicked spock");
    var userInput="spock";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-spock.svg')";
    systemPicked.style.backgroundImage=objectsUrl[systemInput];
})
playAgain.addEventListener("click",function(){
    selectors.classList.remove("hidden");
    showResult.classList.add("hidden");
    systemInput=systemInputGenerator();
})

