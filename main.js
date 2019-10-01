const url = `http://pokeapi.co/api/v2/pokemon/`


const button = document.querySelector("button")
const input = document.querySelector("input")










button.addEventListener('click', async () => {
  const pokemon = input.value
  const response = await axios.get(`${url}${pokemon}`)
  console.log(response)
})