//Vengful spirit defenses
//I want the defenses to be decreced by a certain amount for each volley

let health = 3250;
let shipHealth = document.getElementById("health")

// let armorPlate = 500;

// let repelBoarders = 500;



// loyalist attack variables
// i want a set number of munitions 
//10 laz
// 5 gun batteries
// 6 boarding torpedos 
// all to go down by 1 when used.

// health to be done
let lazCannons = 10;
let gunBattery = 50;
let boardingTorpedos = 100;

// Do I set values for the munitions?
function update() {
  document.getElementById('health').innerText
}

function lazAttack() {
  health -= lazCannons
  console.log(health)
  if (health <= 2200) {
    shipHealth.innerHTML = "Void Shields Destroyed!!!"
  }
  if (health <= 1700) {
    shipHealth.innerHTML = "Armor Destroyed!!!"
  }
  if (health <= 900) {
    shipHealth.innerHTML = "Victory is close Brothers!!!"
  }
  if (health <= 300) {
    shipHealth.innerHTML = "Press the attack!!!"
  }
  if (health == 0)
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"

}



function gunVolley() {
  health -= gunBattery
  console.log(health)
  if (health <= 2200) {
    shipHealth.innerHTML = "Void Shields Destroyed!!!"
  }
  if (health <= 1700) {
    shipHealth.innerHTML = "Armor Destroyed!!!"
  }
  if (health <= 900) {
    shipHealth.innerHTML = "Victory is close Brothers!!!"
  }
  if (health <= 300) {
    shipHealth.innerHTML = "Press the attack!!!"
  }
  if (health == 0)
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"

}


function torpedos() {
  health -= boardingTorpedos
  console.log(health)
  if (health <= 2200) {
    shipHealth.innerHTML = "Void Shields Destroyed!!!"
  }
  if (health <= 1700) {
    shipHealth.innerHTML = "Armor Destroyed!!!"
  }
  if (health <= 900) {
    shipHealth.innerHTML = "Victory is close Brothers!!!"
  }
  if (health <= 300) {
    shipHealth.innerHTML = "Press the attack!!!"
  }
  if (health == 0)
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"

}


update()