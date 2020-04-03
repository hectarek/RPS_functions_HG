//This is the rock paper scissors app for Lab


//Declaring all of the variables I will need
var hands = ['rock', 'paper', 'scissors'];

var getHand = function () {
    return hands[parseInt(Math.random()*10%3)];
}

var player1 = {
    name: 'Hector',
    hand: getHand
}

var player2 = {
    name: 'Natalia',
    hand: getHand
}

var player3 = {
    name: 'Hanson',
    hand: getHand
}

var player4 = {
    name: 'Myisha',
    hand: getHand
}

var winResults = {
    rock: "scissors",
    paper: 'rock',
    scissors: 'paper'
}

var result = document.getElementById('result')

//Sets the player names on the page based on player object. 
// ** Coming soon, player name input.

function onPageLoad() {

    //Getting classes returns an array, so you need to assign each element seperately
    var player1NameTag = document.getElementsByClassName("player1Name");
    for(let i=0; i < player1NameTag.length; i++){
        player1NameTag[i].innerHTML = player1.name;
    }

    var player2NameTag = document.getElementsByClassName("player2Name")
    for(let i=0; i < player2NameTag.length; i++){
        player2NameTag[i].innerHTML = player2.name;
    }
};

//
onPageLoad();

//Make reset funciton to reset all values back to 0
function reset () {

}


//set up round function to play one match of RPS 
function round() {
    
    let player1Hand = player1.hand();
    let player2Hand = player2.hand();

    var player1HandElement = document.getElementsByClassName("player1Hand")

    for (let i=0; i< player1HandElement.length; i++) {
        player1HandElement[i].innerHTML = player1Hand
    }

    var player2HandElement = document.getElementsByClassName("player2Hand")

    for (let i=0; i< player2HandElement.length; i++) {
        player2HandElement[i].innerHTML = player2Hand
    }

    console.log(player1.name, " threw ", player1Hand)
    console.log(player2.name, " threw ", player2Hand)

    if (player1Hand == player2Hand) {
        console.log("Players tied!")
        result.innerHTML = ("It was a tie!")
        return null
    } else if (winResults[player1Hand] == player2Hand){
        console.log(player1.name, " wins!");
        result.innerHTML = (player1.name + " is winner!!")
        return player1
    } else {
        console.log(player2.name, " wins!");
        result.innerHTML = (player2.name + " is winner!!")
        return player2
    }
    
}

var playButton = document.getElementById('playRound');
playButton.addEventListener('click', round);

function playGame(player1, player2, playUntil) {

    let player1Score = 0;
    let player2Score = 0;        
    
    for (var i=0; i < playUntil; i++) {

        var roundEle = document.getElementById('roundNum')
        roundEle.innerHTML = i+1;
        console.log('Round ', i+1)
        let winner = round();
        
        if (winner == player1)  {
            player1Score++;
            console.log(player1.name, " wins the round!")
            result.innerHTML = (player1.name + " wins the round!")
        } else if (winner == player2) {
            player2Score++;
            console.log(player2.name, " wins the round!")
            result.innerHTML = (player2.name + "wins the round!")
        } else {
            console.log("It was a tie!")
            result.innerHTML = ("It was a tie!")
        }

        if (player1Score >= Math.round(playUntil/2)) {
            break;
        } else if (player2Score >= Math.round(playUntil/2)) {
            break;
        } else {
            continue;
        }

    }

        console.log(player1.name, " has a score of ", player1Score);
        console.log(player2.name, " has a score of ", player2Score);


    if (player1Score == player2Score) {
        console.log('The players have tied!');
        result.innerHTML = ("It was a tie!")
        return null
    } else if (player1Score > player2Score) {
        console.log(player1.name, " is winner!!");
        result.innerHTML = (player1.name + " is winner!!")
        return player1
    } else {
        console.log(player2.name, " is winner!!");
        result.innerHTML = (player2.name + " is winner!!")
        return player2
    }

}

var playGameButton = document.getElementById('playGame');
playGameButton.addEventListener('click', function () {
        playGame(player1, player2, 5);
});



//

// ****Tournament function in progress****

// function tournanemnt(player1, player2, player3, player4, playUntil) {

//     let bracket1 = playGame(player1, player2, playUntil);
//     let bracket2 = playGame(player3, player4, playUntil);

//     while (bracket1 == null) {
//         bracket1 = playGame(player1, player2, playUntil);
//         if (bracket1 != null){
//             break;
//         }
//     }

//     while (bracket2 == null) {
//         bracket2 = playGame(player3, player4, playUntil);
//         if (bracket2 != null){
//             break;
//         }
//     }

//     let tournamentWinner = playGame(bracket1, bracket2, playUntil);

//     console.log(tournamentWinner.name, " is the world champion!")

//     return tournamentWinner

// }

