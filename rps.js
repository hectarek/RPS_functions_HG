//This is the rock paper scissors app for Lab

var hands = ['rock', 'paper', 'scissors'];

var getHand = function () {
    return hands[parseInt(Math.random()*10%3)];
}

var player1 = {
    name: 'Hector',
    hand: getHand
}

var player2 = {
    name: 'Sally',
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

//Meant to set up the elements with player names and such until fillable names are implemented

function onPageLoad() {
    var player1NameTag = document.getElementsByClassName("player1Name");
    player1NameTag.innerHTML = player1.name

    console.log(player1NameTag)

    var player2NameTag = document.getElementsByClassName("player2Name")
    player2NameTag.innerHTML = player2.name
};

onPageLoad();

//set up round function to play one match of RPS 
function round() {
    
    let player1Hand = player1.hand();
    let player2Hand = player2.hand();

    document.getElementsByClassName("player1Hand").innerHTML = player1Hand
    document.getElementsByClassName("player2Hand").innerHTML = player2Hand

    console.log(player1.name, " threw ", player1Hand)
    console.log(player2.name, " threw ", player2Hand)

    if (player1Hand == player2Hand) {
        console.log("Players tied!")
        return null
    } else if (winResults[player1Hand] == player2Hand){
        console.log(player1.name, " wins!");
        return player1
    } else {
        console.log(player2.name, " wins!");
        return player2
    }
    
}

var playButton = document.getElementById('playRound');

playButton.addEventListener('click', round);

function playGame(player1, player2, playUntil) {

    let player1Score = 0;
    let player2Score = 0;

    for (var i=0; i < playUntil; i++) {

        console.log('Round ', i+1)
        let winner = round();

        if (winner == player1)  {
            player1Score++;
            console.log(player1.name, " wins the round!")
        } else if (winner == player2) {
            player2Score++;
            console.log(player2.name, " wins the round!")
        } else {
            console.log("It was a tie!")
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
        return null
    } else if (player1Score > player2Score) {
        console.log(player1.name, " is winner!!");
        return player1
    } else {
        console.log(player2.name, " is winner!!");
        return player2
    }

}


//Play 5 Games
console.log(playGame(player1, player2, 5))

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

