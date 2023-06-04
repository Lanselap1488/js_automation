const fib = (len:number) => {
    let list = []
    let prev = 0
    let next = 1
    list.push(prev)
    for (let i = 0; i < len; i++) {
        next = prev + next
        prev = next - prev
        list.push(prev)
    }
    return list
}
console.log(fib(30))