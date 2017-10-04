var controller = {
	models: {},
	view: {},
	addModel: function(newModel) {
		this.models[newModel.name] = newModel;
	},
	setView: function(newView){
		this.view = newView;
	},
	play: function(box){
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		var nextPlayer = this.models.playerState.getNextPlayer();
		this.models.boardState.addMove(row, column, nextPlaer, (err) => {
			if(err) {
				alert('Hello?!?! Are you paying attention? You can\'t go there!');
			} else {
				var newBoard = this.models.boardState.getBoardState();
				this.view.repopulateBoard(newBoard);
				this.models.playerState.togglePlater();
			}
		});
	}
};

function initializeApp() {
	console.log('hi');
	boardModel.setBoardState([
			[null, null, null],
			[null, null, null],
			[null, null, null]
	]);
	var firstPlayer = true;
	playerModel.setPlayerState(firstPlayer);
	controller.addModel(boardModel);
	controller.addModel(playerModel);
	controller.setView(view);
	initializeView.buildBoard();
};
