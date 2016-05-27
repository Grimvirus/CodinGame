/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var originalP1 = [];
var originalP2 = [];
var p1 = [];
var p2 = [];
var rounds = 0;
var winner = "";
var inBattle = false;
var bp1 = [];
var bp2 = [];

var n = parseInt(readline()); // the number of cards for player 1
for (var i = 0; i < n; i++) {
    var cardp1 = readline(); // the n cards of player 1
    p1.push(convertCard(cardp1));
    originalP1.push(cardp1);
}
var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
    var cardp2 = readline(); // the m cards of player 2
    p2.push(convertCard(cardp2));
    originalP2.push(cardp2);
}

printErr("Original P1: " + originalP1);
printErr("P1: " + p1);
printErr("Original P2: " + originalP2);
printErr("P2: " + p2);

while (!winner) {
    rounds++;
    
    if (parseInt(p1[0]) === parseInt(p2[0])) {
        // battle
        inBattle = true;
        rounds--;
        for (var i = 0 ; i < 4 ; i++) {
            bp1.push(p1[0]);
            p1.splice(0,1);
            bp2.push(p2[0]);
            p2.splice(0,1);
        }
    } else if ( parseInt(p1[0]) > parseInt(p2[0]) ) {
        // p1 wins
        bp1.push(p1[0]);
        p1.splice(0,1);
        p1 = p1.concat(bp1);
        
        bp2.push(p2[0]);
        p2.splice(0,1);
        p1 = p1.concat(bp2);
        
        bp1 = [];
        bp2 = [];
        inBattle = false;
    } else if ( parseInt(p1[0]) < parseInt(p2[0]) ) {
        // p2 wins
        bp1.push(p1[0]);
        p1.splice(0,1);
        p2 = p2.concat(bp1);
        
        bp2.push(p2[0]);
        p2.splice(0,1);
        p2 = p2.concat(bp2);
        
        bp1 = [];
        bp2 = [];
        inBattle = false;
    }
    
        
    if (p1.length === 0) {
        winner = "2";
    } else if (p2.length === 0) {
        winner = "1";
    }
    
    if (inBattle && (p1.length === 0 || p2.length === 0)) {
        winner = "PAT";   
    }
    
    if (rounds < 21) {
       printErr("Round: " + rounds + " | " + p1 + " | " + p2);
    }
}

if (winner == "PAT") {
    print(winner);   
} else {  
    print (winner + " " + rounds);   
}

function convertCard(card) {
    var tmpC = card;
    if (tmpC.toString().length == 2) {
        tmpC = tmpC.substr(0,1);
    } else {
        tmpC = tmpC.substr(0,2);
    }
    
    switch(tmpC.toString()){
        case "J":
        tmpC = 11;
        break;
         case "Q":
        tmpC = 12;
        break;
        case "K":
        tmpC = 13;
        break;
        case "A":
        tmpC = 14;
        break;        
        default:
        tmpC = tmpC;
        break;
    }
    return tmpC;
}
