//Vengful spirit defenses
//I want the defenses to be decreced by a certain amount for each volley

// utilize objects/dictionarys to group bits of data that combined make a whole
// let enemy = {
//   health: 3250,
//   attacks: {
//     lazCannons: 10
//   },
//   items: []
// }

let health = 3250;

let shipHealth = document.getElementById("health")

let lazCannons = 10;
let gunBattery = 50;
let boardingTorpedos = 100;

let shipItems = []

// Do I set values for the munitions?
function update() {
  document.getElementById('health').innerText = health.toString()

}

let explosion = document.getElementById("explode");

let machineGun = document.getElementById("machineGun");

function playBtnSound() { //functions cannot share the same name

  explosion.play();
  // c
}

// playBtnSound() NOTE: don't invoke functions at page load unless you need to run that logic at that time


function playBtnSound() {
  machineGun.play();
  console.log("play audio")
}
playBtnSound()


//vengeful spirit mods?
let resistanceItems = {
  voids: {
    name: 'Voids',
    modifier: 5
  },  //reduce lazAttack by 25%
  flak: {
    name: 'flak',
    modifier: 15
  }, //reduce gunBattery by 15%
  repelBoarders: {
    name: 'repelBoarders',
    modifier: 10
  } //reduce boardingTorpedos by 10%
}
function update() {
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
function lazAttack() {
  health -= lazCannons // + addMods()
  console.log(health)
  // -------------------------------------------------
  //move this code into update(), which is in each attack method
  //-------------------------------------------------------------
  update()
  playBtnSound()
  //invoke update at the end of each attack method
}


function gunVolley() {
  health -= gunBattery
  console.log(health)

  update()
  playBtnSound()
}

function torpedos() {
  health -= boardingTorpedos
  console.log(health)

  update()
  playBtnSound()
}


update()

function updateHealthBar() { //STRETCH GOAL
  //grab the healthbar element (getElementById or QuerySelector)
  //calculate the percentage value of the enemy ships health remaining
  //use setAttribute() to change the value of the style attribute on the #health-bar element to the appropriate percentage
}

function addVoid() {
  // add the voids object to the shipItems array
}

function addMods() {
  // create a modifierTotal variable set to 0
  // loop over every object within the shipItems array
  //add the modifier value of each object to the modifierTotal variable
  // return the modifierTotal
}