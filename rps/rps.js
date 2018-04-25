var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var computerChoice;
var playerChoice;



function init(){
	imgPlayer = $("#imgPlayer").get(0);
	btnRock = $("#btnRock").get(0);
	btnPaper = $("#btnPaper").get(0);
	btnScissors = $("#btnScissors").get(0);
	btnGo = $('#btnGo').get(0);
	deselectAll();
}
	
function select(choice)
{
	playerChoice = choice;
	imgPlayer.src = 'images/' + choice + '.png';
	deselectAll();
	if(choice == 'rock') $("#btnRock").css("background-color","#888888");
	if(choice == 'paper') $("#btnPaper").css("background-color","#888888");
	if(choice == 'scissors')  $("#btnScissors").css("background-color","#888888");
	
	btnGo.style.display = 'block';

}
function deselectAll(){
	$("#btnRock").css("background-color","silver");
	$("#btnPaper").css("background-color","silver");
	$("#btnScissors").css("background-color","silver");
}
function go(){
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = $('#imgComputer').get(0);
	var txtEndTitle = $('#txtEndTitle').get(0);
	var txtEndMessage = $('#txtEndMessage').get(0);
	
	$("#lblRock").css("background-color","EEEEEE"); 
	$("#lblPaper").css("background-color","EEEEEE"); 
	$("#lblScissors").css("background-color","EEEEEE"); 


	if(numChoice == 0){
		computerChoice = 'rock';
		imgComputer.src = 'images/rock.png';
		$("#lblRock").css("background-color","yellow");
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'scissors'){
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		
	} 
	else if(numChoice == 1){
		computerChoice = 'paper';
		imgComputer.src = 'images/paper.png';
		$("#lblPaper").css("background-color","yellow");
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
		else if(playerChoice == 'scissors'){
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU WIN';
		}

	}
	else if(numChoice == 2){
		computerChoice = 'scissors';
		imgComputer.src = 'images/scissors.png';
		$("#lblScissors").css("background-color","yellow");
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'scissors'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
	
	document.getElementById('endScreen').style.display = 'block';
}
function startGame(){
	$("#introScreen").hide();
}
function replay(){
	$("#endScreen").hide();
	$("#btnGo").hide();
	
	deselectAll();
	
	$("#lblRock").css("background-color","EEEEEE"); 
	$("#lblPaper").css("background-color","EEEEEE"); 
	$("#lblScissors").css("background-color","EEEEEE"); 
	
	imgPlayer.src = 'images/question.png';
	document.getElementById('imgComputer').src = 'images/question.png';
}