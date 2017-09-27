var ticTappToe ={
	
	nextPlayer: {state: true},

	boardState: [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	],

	play: function(box){
		this.updateData(box, this.boardState, this.nextPlayer);
		this.populateBoard(this.boardState);
	},

	updateData: function(box, boardNow, playerNow) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardNow[row][column] == null) {
			if(playerNow.state) {
				boardNow[row][column] = 'x';
			} else{
				boardNow[row][column] = 'o';
			}
				playerNow.state = !(playerNow.state);
		} else {
			alert('Helloo?? Are you looking? You can\'t do that!')
		};
	},
	populateBoard: function(boardNow) {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var i = 0; i < 3; i++) {
			row = board[i].children;
			for(var j = 0; j < 3; j++){
				column = row[j];
				column.innerHTML = boardNow[i][j];
			};
		};
	}
};