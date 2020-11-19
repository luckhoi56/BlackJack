
    //const fetch = require("node-fetch");
    var players = 
                [
                    {"count":0,"hands":[]},
                    {"count":0,"hands":[]}

]
                
    
    
    
    function fetchDeck()
    {    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then(response => response.json()).then(data=>
    {
        
        deckID = data.deck_id
        console.log("Deck id " + deckID)
        
        // console.log("cards  " + cards)
        m_cards =drawCard(deckID,players.length *2)
        
    })
    }
    
    
    function drawCard(deckID, count){
        var m_cards = []
        var card_count = count
        fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${card_count}`)
            .then(reponse=>reponse.json()).then(data=>{
                
                data.cards.forEach(card=>{
                    console.log(card)
                    m_cards.push(card)
                    /*
                    et i = 0; i < data.length; i++){
                    console.log(data.cards[i])
                    
                    */
                });
                distribute(m_cards)
                
            }
        )
        
    }

    function distribute(cards){
        for(i =0; i<players.length;i++)
        {
            players[i].hands.push(cards.pop());
        
            players[i].hands.push(cards.pop());}
        // players[0].count = 2
        // players[0].hands.push(cards[0])
        // players[0].hands.push(cards[1])

        // players[1].count = 2
        // players[1].hands.push(cards[2])
        // players[1].hands.push(cards[3])
        // console.log(players[0].hands[0].value)
        // console.log(players[1].hands[0].value)
         render(players)
    }

    function render(players){
        var user = document.getElementById("user")
        var dealer = document.getElementById("dealer")
        var player= document.getElementById('player');
        for(i=0;i<players.length;i++)
        {
            if(i==0)
            {
                for(let k=1;k<players[0].hands.length;k++)
                {
                    faceUpD = document.createElement("img")
                    faceUpD.src = players[0].hands[k].images.png
                    dealer.appendChild(faceUpD)  
                }
        
            }
            else if(i==1)
            {
               
                for(let j=0;j<players[1].hands.length;j++){
                faceUpP = document.createElement("img")
                faceUpP.src = players[1].hands[j].images.png
                user.appendChild(faceUpP)  
            }}
            else{
                
                for(let k=1;k<players[i].hands.length;k++)
                {
                    faceUpD = document.createElement("img")
                    faceUpD.src = players[i].hands[k].images.png
                    player.appendChild(faceUpD)  
                }
            }
        }
       
    }

//fetchDeck()
