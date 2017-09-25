var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

function play(box) {
	var row = box.getAttribute('row');
	var column = box.getAttribute('column');
	if(boardState[row][column] == null) {
		if(nextPlayer) {
			boardState[row][column] = 'x';
		} else{
			boardState[row][column] = 'o';
		}
		nextPlayer = !nextPlayer;
		populateBoard();
	} else {
		alert('Helloo?? Are you looking? You can\'t do that!')
	};
};
function populateBoard() {
	var elementID = 0;
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++){
			document.getElementById(elementID).innerHTML = boardState[i][j];
			elementID++;
		};
	};
};