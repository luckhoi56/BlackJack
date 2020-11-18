/*
seach for pokemon, seach for weaknesses, strengths.
*/
var pokemon;
//comment out the code below if you run inside your bash internal console
//npm install xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        //pokemon = xhr.responseText
        pokemon = JSON.parse(xhr.responseText)
        console.log(pokemon)
        //to access pokemon.ability[0] ... 
        console.log(pokemon.name)
    }
}

xhr.open("GET","https://pokeapi.co/api/v2/pokemon/ditto")
xhr.send()