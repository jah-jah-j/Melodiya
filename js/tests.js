function takeFloor(){
	for (let i = 1; i < allFloors.length; i++) {
		const floor = allFloors[i];
		const thisFloor = +(floor.getAttribute('data-floor'));
		if (thisFloor != countValue){
			return;
		} else if (thisFloor = countValue){
			changeClass(floor);
		}
	}
}


function changeClass(floor) {
	for (let i = 1; i < allFloors.length; i++) {
		const floor = allFloors[i];
		const thisFloor = +(floor.getAttribute('data-floor'));
		floor.classList.remove('current-floor');
	}
	if (floor.tagName != 'path'){
		return;
	} else {
		floor.classList.add('current-floor');
	}
}
