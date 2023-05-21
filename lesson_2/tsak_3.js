function myFinc(numb, count) {
    let counter = 0
    let res = Math.floor(numb / count)
    let list = []
    for (i = 0; i < count; i++) {
        list.push(res)
    }
    for (i in list) {
        counter += list[i]
    }
    if (counter === numb) {
        return list.join(',')
    }
    counter -= numb
    if (counter < 0) {
        list[1] += Math.abs(counter)
        return list.join(',')
    }
    if (counter > 0) {
        list[1] -= counter
        return list.join(',')
    }
}

console.log(myFinc(50, 7))