var model = { 
	nextPlayer: true,

	boardState: [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	],

	lastMove: [000, 000],
	updateData: function(box, boardNow, playerNow) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(this.boardState[row][column] == null) {
			if(this.nextPlayer) {
				this.boardState[row][column] = 'x';
			} else{
				this.boardState[row][column] = 'o';
			}
				this.nextPlayer = !this.nextPlayer;
		} else {
			alert('Helloo?? Are you looking? You can\'t do that!')
		};
		return this.boardState;
	}
};

var view ={ 
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

var controller = {
	play: function(box){
		var boardNow = model.updateData(box);
		view.populateBoard(boardNow);
	},
};