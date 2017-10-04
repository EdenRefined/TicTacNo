function initializeApp() {
	controller.addModel(boardModel);
	controller.addModel(playerModel);
	controller.setView(view);
	initializeView.buildBoard();
	console.log('hi')
};
