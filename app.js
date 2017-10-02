var controller = {
	model: {},
	view: {},
	play: function(box){
		model.updateData(box);
		var boardNow = model.readBoardState;
		this.view.populateBoard(boardNow);
	},
};

var model = { 
	nextPlayer: true,

	boardState: [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	],

	updateData: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(this.boardState[row][column] == null) {
			if(this.playerState) {
				this.boardState[row][column] = 'x';
			} else{
				this.boardState[row][column] = 'o';
			}
				this.playerState = !this.playerState;
		} else {
			alert('Helloo?? Are you looking? You can\'t do that!')
		};
	},
	readBoardState: function(){
		return this.boardState;
	},
	readPlayerState: function() {
		return this.playerState;
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

