var  dog = (function(){
    var dogCounter = 0
    var age = 5
    var legs = 4
    var name = "Doggie"
    
    var newDog = new Object()
    newDog.age = age
    newDog.legs = legs
    newDog.name = name


    newDog.bark=function(){
        ++dogCounter
        console.log(`${newDog.name} barked! Count: ${dogCounter}`)
    }
    return newDog
})()

console.log(dog.bark())