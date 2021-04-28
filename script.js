'use strict'
let winner=null;
const playingObjects=["paper","rock","lizard","scissor","spock"];
var objectIndex = Math.floor(Math.random() * playingObjects.length);
var systemInput=playingObjects[objectIndex];
var searchArray=[];
var searchEle="";
var objectsUrl=
{
    "paper":"url('/images/icon-paper.svg')",
    "rock":"url('/images/icon-rock.svg')",
    "lizard":"url('/images/icon-lizard.svg')",
    "scissor":"url('/images/icon-spock.svg')",
    "spock":"url('/images/icon-spock.svg')"
}
// console.log(systemInput);
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
const systemPicked=document.querySelector("systempicked")
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
    console.log(objectsUrl[systemInput]);
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
})
paper.addEventListener("click",function(){
    console.log("clicked paper");
    var userInput="paper";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-paper.svg')";
})
lizard.addEventListener("click",function(){
    console.log("clicked lizard");
    var userInput="lizard";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-lizard.svg')";
})
spock.addEventListener("click",function(){
    console.log("clicked spock");
    var userInput="spock";
    searchArray=[userInput,systemInput];
    gameLogic(userInput,systemInput);
    selectors.classList.add("hidden");
    showResult.classList.remove("hidden");
    userPicked.style.backgroundImage = "url('/images/icon-spock.svg')";
})
playAgain.addEventListener("click",function(){
    selectors.classList.remove("hidden");
    showResult.classList.add("hidden")
})

