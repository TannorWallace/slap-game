//Vengful spirit defenses
//I want the defenses to be decreced by a certain amount for each volley

// utilize objects/dictionarys to group bits of data that combined make a whole
let enemy = {
  health: 3250,
  attacks: {
    // lazCannons: 10,
    // gunBattery: 50,
    // boardingTorpedos: 100
  },
  items: []
}



let shipHealth = document.getElementById("health")
let enemyShipStatus = document.getElementById("enemy-status")

let lazCannons = 10;
let gunBattery = 50;
let boardingTorpedos = 100;



// Do I set values for the munitions?


let explosion = document.getElementById("explode");

let machineGun = document.getElementById("machineGun");



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
    modifier: -5,
    description: 'Voids reactivated!'
  },  //reduce lazAttack by 25%
  flak: {
    name: 'flak',
    modifier: -15,
    description: 'Incoming Flak!'
  }, //reduce gunBattery by 15%
  repelBoarders: {
    name: 'repelBoarders',
    modifier: -10,
    description: 'Enemy Is attempting to repel boarders!'
  } //reduce boardingTorpedos by 10%
}


function update() {
  if (enemy.health <= 2200) {
    enemyShipStatus.innerHTML = "Void Shields Destroyed!!!"
  }
  if (enemy.health <= 1700) {
    enemyShipStatus.innerHTML = "Armor Destroyed!!!"
  }
  if (enemy.health <= 900) {
    enemyShipStatus.innerHTML = "Victory is close Brothers!!!"
  }
  if (enemy.health <= 300) {
    enemyShipStatus.innerHTML = "Press the attack!!!"
  }
  if (enemy.health == 0) {
    enemyShipStatus.innerHTML = "Ship Destroyed Glory to the EMPEROR!!!"
  }
  //Vengeful spirit updates do them here "id="defense-status"
  if (enemy.items.length > 0) {
    document.getElementById("defense-status").innerText = enemy.items[0].description


  }
  document.getElementById('health').innerText = enemy.health.toString()
}


function lazAttack() {
  enemy.health -= lazCannons + addMods()
  console.log(enemy.health)
  // -------------------------------------------------

  //-------------------------------------------------------------
  update()
  playBtnSound()

}


function gunVolley() {
  enemy.health -= gunBattery + addMods()
  console.log(enemy.health)

  update()
  playBtnSound()
}

function torpedos() {
  enemy.health -= boardingTorpedos + addMods()
  console.log(enemy.health)

  update()
  playBtnSound()
}



function addItem(item) {
  if (!enemy.items.length) {
    enemy.items.push(resistanceItems[item])
  }
  console.log(enemy.items)
  update()
  // add the voids object to the shipItems array
}

function addMods() {
  let modifierTotal = 0;
  for (let index = 0; index < enemy.items.length; index++) {
    let item = enemy.items[index];
    modifierTotal += item.modifier
    update()
  }
  console.log(modifierTotal)
  return modifierTotal
  // create a modifierTotal variable set to 0
  // loop over every object within the shipItems array
  //add the modifier value of each object to the modifierTotal variable
  // return the modifierTotal
}
update()