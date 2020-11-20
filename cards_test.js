    var deckID;
    //const fetch = require("node-fetch");
    var stay= false;
    var done =false;
    var players = 
                [
                    {"value":0,"hands":[]},
                    {"value":0,"hands":[]}
                ]
                
    
    
    
    async function runGame()
    {   
        let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        let data = await response.json();
        deckID = data.deck_id;
        for(i=0;i<players.length;i++)
        {
            console.log(i);
            hit(players[i]);
            
            hit(players[i]);
            
        }
        
        // let drawResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${players.length*2}`);
        // let cardData = await drawResponse.json();
        // p_cards = cardData.cards;
        // distribute(p_cards)
        render();
        while(!done){
            max= Math.max.apply(Math,players.map(function(player){return player.value}))
            console.log(max);
            done  = (players[0].value>=21||stay)&&(max>=21||players[1].value>=17);
            console.log('me: '+players[0].value);
            console.log('dealer: '+players[1].value);
            
            if(stay && players[1].value<17)
            {
                hit(players[1]);
            }
            // players.forEach(player=>console.log(player.value));
            render();
            
            await new Promise(r => setTimeout(r, 2000));
            
            if(done)
            {

                if(players[1].value>21) alert('You Win')
                
                else if(players[0]==max) alert('You Win');
                else alert('You Lose');
            }
        }
        
    }
    
    
    async function hit(player){
        
        
        let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        let cardData = await response.json();
        // console.log(cardData.cards[0])
        let cardValue = await cardData.cards[0].value==='ACE'?1:(cardData.cards[0].value==='KING'||cardData.cards[0].value==='QUEEN'||cardData.cards[0].value==='JACK')? 10:parseInt(cardData.cards[0].value);
        console.log(cardValue);
        player.value = player.value==10&& cardValue==1? 21: parseInt(player.value)+ await cardValue;
        await player.hands.push( await cardData.cards[0]);
        
    }

    // function distribute(cards){
    //     console.log('distributing cards');
    //     for(i =0; i<players.length;i++)
    //     {
    //         players[i].hands.push(cards.pop());
        
    //         players[i].hands.push(cards.pop());}
    //     // players[0].count = 2
    //     // players[0].hands.push(cards[0])
    //     // players[0].hands.push(cards[1])

    //     // players[1].count = 2
    //     // players[1].hands.push(cards[2])
    //     // players[1].hands.push(cards[3])
    //     // console.log(players[0].hands[0].value)
    //      console.log(players[1].hands[0].value)
    //     //  render(players)
    //     console.log('done distributing');
    // }

    function render(){
        var user = document.getElementById("user")
        var dealer = document.getElementById("dealer")
        var player= document.getElementById('player');
        user.innerHTML ='<div class="col">User</div>';
        dealer.innerHTML ='<div class="col">Dealer</div>';
        player.innerHTML ='<div class="col">Other player</div>';
        console.log('going to render')
        for(i=0;i<players.length;i++)
        {
            if(i==0)
            {
               
                for(let j=0;j<players[0].hands.length;j++){
                    let faceUpP = document.createElement("img")
                    faceUpP.src = players[0].hands[j].images.png
                    user.appendChild(faceUpP)  
                }
            }
            else if(i==1)
            {
                for(let k=1;k<players[1].hands.length;k++)
                {
                    let faceUpD = document.createElement("img")
                    faceUpD.src = players[1].hands[k].images.png
                    dealer.appendChild(faceUpD)  
                }
            }
            else{
                
                for(let k=1;k<players[i].hands.length;k++)
                {
                    let faceUpD = document.createElement("img")
                    faceUpD.src = players[i].hands[k].images.png
                    player.appendChild(faceUpD)  
                }
            }
        }
       
    }
    function toStay()
    {
        stay=true;
        console.log('stay');
    }

//fetchDeck()
