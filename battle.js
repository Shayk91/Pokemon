const url = `http://pokeapi.co/api/v2/pokemon/`

//battle.html
const display = document.querySelector("#container")
const battle = document.querySelector("#battle")
const text = document.querySelector("#text")
const fightButton = document.querySelector("#fight");
const music = document.querySelector("#wild");
const play = document.querySelector("#play")
const playButton = document.querySelector("#playButton")
const page1 = document.querySelector("#page1")
const pikaHealthBar = document.querySelector("#healthPikachu")
const mewHealthBar = document.querySelector("#healthMewtwo")
let fighter = 0;
const pikachuImage = document.querySelector(".pikachuDiv")
const mewtwoImage = document.querySelector(".mewtwoDiv")


const getMewtwo = (sprite) => {
  let mewtwo = document.createElement('div')
  mewtwo.className = "mewtwoDiv"
  let shiny = Math.ceil(Math.random() * 100)
  console.log(shiny)
  if (shiny <= 10) {
    mewtwo.innerHTML = `<img id='mewtwo' src='${sprite.front_shiny}'>`
  } else {
    mewtwo.innerHTML = `<img id='mewtwo' src='${sprite.front_default}'>`
  }
  display.append(mewtwo)
}
const getPikachu = (sprite) => {
  let pikachu = document.createElement('div')
  pikachu.className = "pikachuDiv"
  pikachu.innerHTML = `<img id='pikachu' src='${sprite.back_female}'>`
  display.append(pikachu)
}


window.addEventListener('load', async () => {
  // let number = Math.ceil(Math.random() * 151)
  const response = await axios.get(`${url}${"mewtwo"}`)
  getMewtwo(response.data.sprites)
})


window.addEventListener('load', async () => {
  const response = await axios.get(`${url}${"pikachu"}`)
  getPikachu(response.data.sprites)
})




const fight = function () {
  text.innerHTML = ''
  if (mewHealthBar.value > 0 && pikaHealthBar.value > 0) {
    let pikachuAttack = Math.ceil(Math.random() * 20);
    let mewtwoAttack = Math.ceil(Math.random() * 20);
    music.play();
    if (fighter === 0) {
      if (pikachuAttack === 1 || pikachuAttack === 2) {
        pikaHealthBar.value -= 10
        text.innerHTML += `Pikachu hit itself in confusion!!`
        battle.append(text)
      } else if (pikachuAttack >= 3 && pikachuAttack <= 10) {
        pikaHealthBar.value -= 0
        text.innerHTML += `Pikachu used Thundershock but missed!!`
        battle.append(text)
      } else if (pikachuAttack >= 11 && pikachuAttack <= 18) {
        mewHealthBar.value -= 20
        text.innerHTML += `Pikachu used Thunderbolt!!`
        battle.append(text)
      } else {
        mewHealthBar.value -= 30
        text.innerHTML += `Pikachu used Volt Tackle!! Critical hit!!`
        battle.append(text)
      }
      fighter += 1
    } else if (fighter === 1) {
      if (mewtwoAttack === 1 || mewtwoAttack === 2) {
        mewHealthBar.value -= 10
        text.innerHTML += `Mewtwo hit itself in confusion!!`
        battle.append(text)
      } else if (mewtwoAttack >= 3 && mewtwoAttack <= 10) {
        mewHealthBar.value -= 0
        text.innerHTML += `Mewtwo used Hyponosis but missed!!`
        battle.append(text)
      } else if (mewtwoAttack >= 11 && mewtwoAttack <= 18) {
        pikaHealthBar.value -= 20
        text.innerHTML += `Mewtwo used Shadow Ball!!`
        battle.append(text)
      } else {
        pikaHealthBar.value -= 30
        text.innerHTML += `Mewtwo used Psyhic!! Critical Hit!!`
        battle.append(text)
      }
      fighter -= 1;
    }
  }
  else if (mewHealthBar.value <= 0) {
    text.innerHTML += `Mewtwo has fainted!!`
    battle.append(text)
    music.pause()
  } else if (pikaHealthBar.value <= 0) {
    text.innerHTML += `Pikachu has fainted!!`
    battle.append(text)
    music.pause();
  } else {
    text.innerHTML += `Pikachu and Mewtwo have both fainted!!`
    battle.append(text)
    music.pause()
  }
}
fightButton.addEventListener('click', fight)
document.addEventListener('keypress', fight)

const displayName = () => {
  const getName = document.createElement('div')
  getName.className = "trainer-name"
  getName.innerHTML = `<h1 id='start'>${localStorage.name}: Go Pikachu!! I choose you!!<h1>`
  text.append(getName)
}
displayName()
