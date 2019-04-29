let player1 = "X";
let player2 = "Z";

let itsYourTurn = 1;
let howManyMoves = 0;

let sqr = $(".square");

sqr.on('click', function(e) {
    howManyMoves++;

    if(itsYourTurn === 1) {
        event.target.innerHTML = player1;
        event.target.color = "yellow"
        itsYourTurn++;
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = "orange";
        currentTurn-;
        }
    });

});
