num = 1233412
let array = (""+num).split("").map(Number)

function plus(number){
    let arr = (""+number).split("").map(Number)
    let res = arr.reduce((x,b) => x+b)
    if (res <=9){
        return  console.log(res)
    }
    else {
        plus(res)
    }
}



plus(num)