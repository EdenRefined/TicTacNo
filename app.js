var ticTappToe ={
	
	nextPlayer: true,

	boardState: [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	],

	play: function(box){
		this.updateData(box);
		this.populateBoard();
	},

	updateData: function(box) {
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
	},
	populateBoard: function() {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var i = 0; i < 3; i++) {
			row = board[i].children;
			for(var j = 0; j < 3; j++){
				column = row[j];
				column.innerHTML = this.boardState[i][j];
			};
		};
	}
};