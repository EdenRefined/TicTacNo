var nextPlayer = true;

var boardState = [
	null, null, null,
	null, null, null,
	null, null, null
];

function play(box) {
	if(boardState[box.id] == null) {
		if(nextPlayer) {
			box.innerHTML = 'x';
		} else{
			box.innerHTML = 'o';
		}
		nextPlayer = !nextPlayer;
		populateBoard();
	} else {
		alert('Helloo?? Are you looking? You can\'t do that!')
	};
};
function populateBoard() {
	for(var i = 0; i < 9; i++) {
		document.getElementById(i).innerHTML = boardState[i];
	};
};