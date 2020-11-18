function Dog(age, legs, name){
    this.age =  age
    this.legs = legs
    this.name = name

    var dogCounter = 0

    this.Dog=()=>{
        ++dogCounter
        console.log(`${this.name} barked! Count: ${dogCounter}`)
    }
}

var gr = new Dog(10,4,"BigDog")
console.log(gr)