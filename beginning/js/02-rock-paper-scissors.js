// The Rock, Paper, Scissors Game
// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// *Rock destroys scissors.
// *Scissors cut paper.
// *Paper covers rock.

// Our code will break the game into 3 phases:
// 1.User makes a choice. How will we collect the user’s choice?
var userChoice = prompt("Do you choose rock, paper or scissors?");
// 2.Computer makes a choice. How will we collect the computer’s choice?
var computerChoice = Math.random();
 if (computerChoice < 0.34) {
   computerChoice = "rock";
 } else if(computerChoice <= 0.67) {
   computerChoice = "paper";
 } else {
   computerChoice = "scissors";
 }
// 3.A conditional that determines who wins.

 
var compare = function(choice1,choice2) {
   if (choice1 === choice2) {   
       return "The result is a tie!" + " " + "Lets play again." ;
   }
  
   else if (choice1 === "rock") {
       if (choice2 === "scissors") {
           return "rock wins" + "<br>" + "You beat the computer, nice job!";
       }
       else {
           return "paper wins" + "<br>" + "Your really smart computer beat you.";
       }
   }
  
   else if (choice1 === "paper") {
      
       if (choice2 === "rock") {
           return "paper wins" + "<br>" + "You beat the computer, nice job!";
       }
       else {
           return "scissors wins" + "<br>" + "Your really smart computer beat you.";
       }         
   }
  
   else if (choice1 === "scissors") {     
       if (choice2 === "rock") {
           return "rock wins" + "<br>" + "Your really smart computer beat you.";
       }
       else {
           return "scissors win" + "<br>" + "You beat the computer, nice job!";
       }
   }
 } //closes compare function

 //console.log("Computer chooses: " + computerChoice);
  document.write("Computer chose: " + computerChoice + "<br>");
  document.write(compare(userChoice,computerChoice));
  
