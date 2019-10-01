const url = `http://pokeapi.co/api/v2/pokemon/`

//battle.html
const display = document.querySelector("#container")
const battle = document.querySelector("#battle")
const text = document.querySelector("#text")
const fightButton = document.querySelector("#fight");
const music = document.querySelector("#wild");
let mewtwoHealth = 50
let pikachuHealth = 50

const getMewtwo = (sprite) => {
  let mewtwo = document.createElement('div')
  mewtwo.className = "mewtwoDiv"
  mewtwo.innerHTML = `<img id='mewtwo' src='${sprite}'>`
  display.append(mewtwo)
}
const getPikachu = (sprite) => {
  let pikachu = document.createElement('div')
  pikachu.className = "pikachuDiv"
  pikachu.innerHTML = `<img id='pikachu' src='${sprite}'>`
  display.append(pikachu)
}


window.addEventListener('load', async () => {
  const response = await axios.get(`${url}${"mewtwo"}`)
  getMewtwo(response.data.sprites.front_default)
})


window.addEventListener('load', async () => {
  const response = await axios.get(`${url}${"pikachu"}`)
  getPikachu(response.data.sprites.back_female)
})




const fight = function () {
  text.innerHTML = ''
  if (mewtwoHealth > 0 && pikachuHealth > 0) {
    let pikachuAttack = Math.ceil(Math.random() * 20);
    let mewtwoAttack = Math.ceil(Math.random() * 20);
    if (pikachuAttack === 1 || pikachuAttack === 2) {
      pikachuHealth -= 5
      text.innerHTML += `pikachu hits themselves`
      battle.append(text)
    } else if (pikachuAttack >= 3 && pikachuAttack <= 10) {
      pikachuHealth -= 0
      text.innerHTML += `pikacha misses`
      battle.append(text)
    } else if (pikachuAttack >= 11 && pikachuAttack <= 18) {
      mewtwoHealth -= 10
      text.innerHTML += `pikachu hits the mewtwo for 10`
      battle.append(text)
    } else {
      mewtwoHealth -= 20
      text.innerHTML += `pikachu hits the mewtwo for 20`
      battle.append(text)
    }
    if (mewtwoAttack === 1 || mewtwoAttack === 2) {
      mewtwoHealth -= 5
      text.innerHTML += `mewtwo hits itself`
      battle.append(text)
    } else if (mewtwoAttack >= 3 && mewtwoAttack <= 10) {
      mewtwoHealth -= 0
      text.innerHTML += `mewtwo misses`
      battle.append(text)
    } else if (mewtwoAttack >= 11 && mewtwoAttack <= 18) {
      pikachuHealth -= 10
      text.innerHTML += `mewtwo hits the pikachu for 10`
      battle.append(text)
    } else {
      pikachuHealth -= 20
      text.innerHTML += `mewtwo hits the pikachu for 20`
      battle.append(text)
    }
    text.innerHTML += `pikachu's health is ${pikachuHealth} and mewtwo's health is ${mewtwoHealth}`
    battle.append(text)
  }
  else if (mewtwoHealth <= 0) {
    text.innerHTML += `mewtwo has been slain`
    battle.append(text)
  } else if (pikachuHealth <= 0) {
    text.innerHTML += `pikachu has fallen`
    battle.append(text)
  } else {
    text.innerHTML += `pikachu and mewtwo have defeated each other`
    battle.append(text)
  }
}
fightButton.addEventListener('click', fight)