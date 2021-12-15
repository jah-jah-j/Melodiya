'use strict';

//Элементы
const floorPath = document.querySelector('.home-image');
const	counterUp = document.querySelector('.button-up');
const	counterDown = document.querySelector('.button-down');
const counter = document.querySelector('.counter');
const allFloors = floorPath.children; //все этажи

// Переменные
let currentFloor = 2,
		countValue = +counter.textContent,
		disabled = true;

//Функции
nextFloor();
prevFloor();
showFloor();
disableDownBtn();

//Функция наведения

function showFloor() {
	floorPath.addEventListener('mouseover', event => {

		let targetFloor = event.target; //Отслеживает событие на ребёнке

		if (targetFloor.tagName != 'path'){ //проверяет, точно ли курсор на слое
			return;
		} else {
			showUpBtn();
			showDownBtn();
			currentFloor = targetFloor.getAttribute('data-floor');
			counter.innerText = `${currentFloor}`;
			countValue = +counter.textContent;
		}

		if (countValue > 17 ){
			disableUpBtn();
		} else if (countValue < 3){
			disableDownBtn();
		}

		addActiveClass();
	})
}

//Класс для выбранного этажа

function addActiveClass(){
	removeActiveClass();
	allFloors[countValue].classList.add('current-floor');
}

function removeActiveClass(){
	for (let i = 1; i < allFloors.length; i++) {
		const item = allFloors[i];
		item.classList.remove('current-floor');
	}
}

//Функции клика

function nextFloor(){
	counterUp.addEventListener('click', ()=>{

		showDownBtn();
		countValue++;

		if (countValue <= 9){
			counter.innerText = `0${countValue}`
		}

		if (countValue > 9){
			counter.innerText = `${countValue}`
		}

		if (countValue > 17){
			disableUpBtn();
		}

		addActiveClass();
	})
}

function prevFloor(){
	counterDown.addEventListener('click', ()=>{

		showUpBtn();
		countValue--;

		if (countValue <= 9){
			counter.innerText = `0${countValue}`
		}

		if (countValue > 9){
			counter.innerText = `${countValue}`
		}

		if (countValue < 3){
			disableDownBtn();
		};

		addActiveClass();
	})
}

//Функции скрытия и показа кнопок вверх и вниз

function disableUpBtn(){
	if(disabled){
		counterUp.disabled = true;
	}
}

function disableDownBtn(){
	if(disabled){
		counterDown.disabled = true;
	}
}

function showDownBtn(){
	if(disabled){
		counterDown.disabled = false;
	}
}

function showUpBtn(){
	if(disabled){
		counterUp.disabled = false;
	}
}

