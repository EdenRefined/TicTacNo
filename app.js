var nextPlayer = true;

function play(box) {
	if(nextPlayer) {
		box.innerHTML = 'x';
	} else{
		box.innerHTML = 'o';
	}
	nextPlayer = !nextPlayer;
}