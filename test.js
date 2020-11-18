
function outerFunction(){
    var counter = 0
    return function innerFunction(){
        ++counter
        console.log(counter)
    }
}

var f = outerFunction()
f()
f()
f()

//but if we create a new g function(), it will reset counter


var g = outerFunction().counter
console.log(g)


//immed

