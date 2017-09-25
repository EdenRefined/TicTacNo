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
	} else {
		alert('Helloo?? Are you looking? You can\'t do that!')
	};
	console.log(boardState);

};
	