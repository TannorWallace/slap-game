//Vengful spirit defenses
//I want the defenses to be decreced by a certain amount for each volley

let voidSheilds = 1250;

// loyalist attack variables
// i want a set number of munitions 
//10 laz
// 5 gun batteries
// 6 boarding torpedos 
// all to go down by 1 when used.

// damage to be done
let lazCannons = 150;
let gunBattery = 350;
let boardingTorpedos = 200;

// Do I set values for the munitions?

function attack() {
  voidSheilds -= lazCannons
  console.log(voidSheilds)
}


function gunVolley() {
  voidSheilds -= gunBattery
  console.log(voidSheilds)

}


function torpedos() {
  voidSheilds -= boardingTorpedos
  console.log(voidSheilds)

}
