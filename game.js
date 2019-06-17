//Vengful spirit defenses
//I want the defenses to be decreced by a certain amount for each volley

let health = 3250;

let shipHealth = document.getElementById("health")

// let lazCannons = 10;
// let gunBattery = 50;
// let boardingTorpedos = 100;


// function update() {
//   console.log(health)
//   if (health <= 2200) {
//     shipHealth.innerHTML = "Void Shields Destroyed!!!"
//   }
//   if (health <= 1700) {
//     shipHealth.innerHTML = "Armor Destroyed!!!"
//   }
//   if (health <= 900) {
//     shipHealth.innerHTML = "Victory is close Brothers!!!"
//   }
//   if (health <= 300) {
//     shipHealth.innerHTML = "Press the attack!!!"
//   }
//   if (health == 0)
//     shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"
// }
// console.log(update())


// let shipHealth = document.getElementById("health")

let lazCannons = 10;
let gunBattery = 50;
let boardingTorpedos = 100;

// Do I set values for the munitions?
function update() {
  document.getElementById('health').innerText

}

let explosion = document.getElementById("explode");


function playBtnSound() {

  explosion.play();
  console.log("play audio")
}

playBtnSound()

//vengeful spirit mods?
let resistance = [
  {
    voids: 'something' //reduce lazAttack by 25%
  },
  {
    flak: 'something else' //reduce gunBattery by 15%
  },
  {
    repelBoarders: 'another something' //reduce boardingTorpedos by 10%
  }
]

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
  if (health == 0) {
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"
  }
  playBtnSound()
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
  if (health == 0) {
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"
  }
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
  if (health == 0) {
    shipHealth.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"
  }
}


update()
