'use strict';

//Элементы
const floorPath = document.querySelector('.home-image');
const	counterUp = document.querySelector('.button-up');
const	counterDown = document.querySelector('.button-down');
const counter = document.querySelector('.counter');
const counter2 = document.querySelector('.counter-2');
const counter3 = document.querySelector('.counter-3');
const allFloors = floorPath.children; //все этажи

// Переменные
let currentFloor = 2,
		countValue = +counter.textContent,
		disabled = true;

//Функция инициализации


document.addEventListener('DOMContentLoaded', function (e){
	nextFloor();
	prevFloor();
	showFloor();
	disableDownBtn();
})



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
			counter2.innerText = `${currentFloor}`;
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
			counter2.innerText = `0${countValue}`
		}

		if (countValue > 9){
			counter.innerText = `${countValue}`
			counter2.innerText = `${countValue}`
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
			counter2.innerText = `0${countValue}`
		}

		if (countValue > 9){
			counter.innerText = `${countValue}`
			counter2.innerText = `${countValue}`
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

//Popup

let popupButton = document.querySelector('.button-primary'),
		closeButton = document.querySelector('.close'),
		popup = document.querySelector('.popup'),
		popupOverlay = document.querySelector('.popup-overlay');



popupButton.onclick = function openPopup(){
	popup.classList.remove('hidden');
	popupOverlay.classList.remove('hidden');
	keyPress();
}

function closePopup(){
	popup.classList.add('hidden');
	popupOverlay.classList.add('hidden');
}

closeButton.onclick = ()=>{
	closePopup();
}

popupOverlay.onclick = ()=>{
	closePopup();
}

function keyPress(){
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		let isEscape = false;
		if ("key" in evt) {
			isEscape = (evt.key === "Escape" || evt.key === "Esc");
		} else {
			isEscape = (evt.keyCode === 27);
		}
		if (isEscape) {
			closePopup();
		}
	};
}
