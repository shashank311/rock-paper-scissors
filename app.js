//1. CACHE THE DOM
let userScore=0;
let computerScore=0;
//using underscore to clearly differrentiate between normal variables and dom variables
//unserscore span because we've put those in the span tag
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
//caching the DOM means storing something for future


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper"
    if(letter==="s") return "Scissors";
}




function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! ` ;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    

}

function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML=`${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost! ` ;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow')}, 300);

}

function draw(userChoice,computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw! `;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow')}, 300);

}



//6. Defining game function
function game(userChoice){
    //console.log(userChoice);
    const computerChoice=getComputerChoice();
    //console.log("user choice => "+ userChoice);
    //console.log("computer choice => "+computerChoice);
    //console.log(computerChoice);
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            //console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            //console.log("COMPUTER WINS");
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            //console.log("IT'S A DRAW ");
            break;
    }
}
  


//2. adding Event Listeners
//4. creating main function and wrap all code inside main
function main(){
    rock_div.addEventListener('click',function(){
        //console.log("You clicked rock");
        //3. creating game function
        game("r");
    })
    paper_div.addEventListener('click',function(){
        //console.log("You clicked paper");
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        //console.log("You clicked scissors");
        game("s");
    })
}

//5. calling main
main();