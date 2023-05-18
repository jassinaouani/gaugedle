// function to fill in the correct answer in blue
const newRow = abilityTable.insertRow(1); // Index 1, to add to the top of the table after the header row
const newGuessCell = newRow.insertCell();
newGuessCell.textContent = prettyRandom;
newGuessCell.classList.add("solution");

for (let i = 0; i < propertiesToDisplay.length; i++) {
	const property = propertiesToDisplay[i];
	const newValueCell = newRow.insertCell();
	newValueCell.textContent = abilities[randomAbility][property];
	newValueCell.classList.add("solution");
}
//

document.getElementById("page").style.fontFamily = 'Comic Sans MS'
document.getElementById("submit-button").style.fontFamily = 'Comic Sans MS'
document.getElementById("-button").style.fontFamily = 'Comic Sans MS'
document.getElementById("concede-button").style.fontFamily = 'Comic Sans MS'
document.getElementById("stats-button").style.fontFamily = 'Comic Sans MS'


document.getElementById("page").style.color = 'white'
document.getElementById("page").style.textShadow = 'none'