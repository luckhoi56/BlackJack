
<html>



</html>

<script>
function fetchDecks(){
    const fetch = require("node-fetch");
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then(response => response.json()).then(data=>
    {
        console.log(data)
        deckID = data.deck_id
        console.log(deckID)
    })
    
    }
{
    var deckID = ""
fetchDecks()
console.log(deckID)
}
function round()
</script>
