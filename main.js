const url = `http://pokeapi.co/api/v2/pokemon/`

const button = document.querySelector(".button")
const input = document.querySelector("input")
const music = document.querySelector("#music")


button.addEventListener('click', () => {
  const name = input.value
  console.log(name)
})

