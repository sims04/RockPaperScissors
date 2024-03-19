/*function greeting(greeting)
{
    return greeting;
}
console.log(greeting("Hello YOU"))*/

/*if (playerSelection === "rock" && computerSelection  === "paper") {
      return( "You lost ! paper beats rock")} 
      else { if (playerSelection === "rock" && computerSelection  === "scissor"){
      return ("you won ! rock beat scissor")}} */ 

var list=["rock",
"paper",
"scissor"
];

function getComputerChoice(list){
   return(list[Math.floor(Math.random()*list.length)]);
}


playerSelection = ["rock",
"paper",
"scissor"
];
computerSelection=getComputerChoice(list);

function playingrounds(playerSelection,computerSelection){
    let result;
    if (computerSelection === "paper" && playerSelection === "rock") {
       result= "You Lose! Paper beats Rock"
      } else {
       if (computerSelection === "scissor" && playerSelection === "paper"){
           result= "You Lose! Scissor beats paper"
        }
        else {
            if (computerSelection === "rock" && playerSelection === "scissor"){
                result= "You Lose! rock beats scissor"
             }  else {
                if (computerSelection === "rock" && playerSelection === "paper"){
                    result= "You Won! Paper beats Rock"
                 }
                 else {
                    if (computerSelection === "paper" && playerSelection === "scissor"){
                        result= "You Won! Scissor beats paper"
                     }
                     else {
                        if (computerSelection === "scissor" && playerSelection === "rock"){
                            result= "You Won! rock beats scissor"
                         } else {
                            if (computerSelection ===  playerSelection){
                                result= "It's a tie"
                             }
                         
      } 
    
    }

}
}
}
}
return("Player answer : " + playerSelection 

+ " . " + "Computer answer " + computerSelection 

+ " = " + result);
}
console.log(playingrounds("paper",computerSelection));