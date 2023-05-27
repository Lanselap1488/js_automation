function counter(){
    let count = 0
    return function() {
        return count++
    }
}


let countWork = counter()

countWork()
console.log(countWork())
console.log(countWork())
console.log(countWork())