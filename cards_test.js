
    //const fetch = require("node-fetch");
    var players = [
                {
                    "dealer":0,
                    "A": 0
                }
                ]
    
    
    
    function fetchDeck()
    {    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then(response => response.json()).then(data=>
    {
        
        deckID = data.deck_id
        console.log("Deck id " + deckID)
        drawCard(deckID,4)
    })
    }
    
    
    function drawCard(deckID, count){
        var m_cards = []
        var card_count = count
        fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${card_count}`).then(reponse=>reponse.json()).then(data=>{
            //console.log(data)
            for(let i = 0; i < data.length; i++){
                m_cards.push(data.cards[i])
            }
            
        })
        
    }

