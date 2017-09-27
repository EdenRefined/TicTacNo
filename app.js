var model = { 
	nextPlayer: true,

	boardState: [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	],

	updateData: function(box, boardNow, playerNow) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardNow[row][column] == null) {
			if(playerNow.state) {
				boardNow[row][column] = 'x';
			} else{
				boardNow[row][column] = 'o';
			}
				playerNow = !(playerNow);
		} else {
			alert('Helloo?? Are you looking? You can\'t do that!')
		};
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
		model.updateData(box, model.boardState, model.nextPlayer);
		view.populateBoard(model.boardState);
	},
};