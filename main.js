const url = `http://pokeapi.co/api/v2/pokemon/`

const button = document.querySelector("#button")
const input = document.querySelector("input")
const music = document.querySelector("#music")
const pokeball = document.querySelector("#pokeball")

button.addEventListener('click', () => {
  const name = input.value
  window.localStorage.setItem('name', name)
})

document.addEventListener('keypress', (e) => {
  const name = input.value
  window.localStorage.setItem('name', name)
  const key = e.which || e.keyCode
  if (key === 13) {
    window.location.href = "battle.html"
  }
})

pokeball.addEventListener('click', () => {
  pokeball.style.maxHeight = "1000px"
})