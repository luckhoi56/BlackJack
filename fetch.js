var pokemon
const fetch = require("node-fetch");
fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => response.json()).then(data=>console.log(data))