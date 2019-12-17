function start() {
	window.food = document.getElementById('food');
	window.clean = document.getElementById('clean');
	window.happiness = document.getElementById('happiness');

	food.addEventListener('click', food_checker);
	clean.addEventListener('click', clean_checker);
	happiness.addEventListener('click', happiness_checker);

	food.setAttribute('value', Math.random()*100);
	clean.setAttribute('value', Math.random()*100);
	happiness.setAttribute('value', Math.random()*100);

	setInterval(() => food.value -= 3, 5000);
	setInterval(() => clean.value -= 3, 5000);
	setInterval(() => happiness.value -= 3, 5000);
}

function food_checker() {
	if (food.value === 0) {
		alert(`Game over`);
		break
	}
}

function clean_checker() {
	if (clean.value === 0) {
		alert(`Game over`);
		break
	}
}

function happiness_checker() {
	if (happiness.value === 0) {
		alert(`Game over`);
		break
	}
}

function eat() {
	food.value += 30;
	clean.value -= 20;
}

function wash() {
	clean.value += 40;
	happiness.value -= 20;
}

function play() {
	happiness.value += 15;
	food.value -= 10;
}