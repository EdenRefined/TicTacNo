var controller = {
	model: {},
	view: {},
	addModel: function(newModel) {
		this.models[newModel.name] = newModel;
	},
	setView: function(newView){
		this.view = newView;
	},
	play: function(box){
        var nowPlayer = this.models.playerModel.readData();
        var dbError = this.models.boardModel.updateData(box, nowPlayer);
        if (dbError) {
            var boardNow = model.readBoardState();
            this.view.populateBoard(boardNow);
            this.models.playerModel.toggleNextPlayer();
        } else {
            alert('Hello?!?! Are you paying attention? You can\'t go there!');
        };
	}
};