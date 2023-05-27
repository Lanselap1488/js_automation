function func() {
    // это замыкание
    let numbers = []
    return function () {
        for (let x = 0; x < 100; x++) {
            let num = Math.round(Math.random() * (100 - 1) + 1);
            if (numbers.includes(num)) {
                continue;
            }
            else {
                numbers.push(num)
                return numbers
            }
        }
    }

}

let res = func()
console.log(res())
console.log(res())
console.log(res())
console.log(res())
console.log(res())
console.log(res())
console.log(res())
