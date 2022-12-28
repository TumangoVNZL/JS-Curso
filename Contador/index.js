let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let counter = 0;
function increment() {
	counter += 1;
	countEl.innerText = counter;
}
function save () {
	let countStr = counter + " - ";
	saveEl.textContent += countStr;
	console.log(counter);
}
