
// Function to calculate chai ingredients
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // in ml
  const milkPerCup = 50;   // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;   // in teaspoons

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log(`To make ${numberOfCups} cup(s) of chai, you will need:`);
  console.log(`- ${totalWater} ml of water`);
  console.log(`- ${totalMilk} ml of milk`);
  console.log(`- ${totalTeaLeaves} tablespoon(s) of tea leaves`);
  console.log(`- ${totalSugar} teaspoon(s) of sugar`);
}

// Prompt the user for input
const userInput = prompt("How many cups of chai would you like to make?");
const numberOfCups = parseInt(userInput);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid positive number.");
}
