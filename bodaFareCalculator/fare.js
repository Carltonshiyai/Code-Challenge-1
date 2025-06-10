// function to calculate the fare for a boda boda ride
function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // in KES
  const chargePerKm = 15; // in KES per km

  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;
   
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}

// Prompt the user for input
const Input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = parseFloat(userInput);

if (!isNaN(distance) && distance > 0) {
  calculateBodaFare(distance);
} else {
  console.log("Tafadhali andika kilomita halali.");
}

