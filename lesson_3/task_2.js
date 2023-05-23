list = [1,2,35,7,8,6,4]
list2 = [1141,2,35,34112,548,6,452, true]

function getMax(arr){
    res = arr.reduce((a,b) => Math.max(a,b))
    return res
}
console.log(getMax(list2))