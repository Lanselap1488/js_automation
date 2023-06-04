let list2 = [1141,2,35,34112,548,6,452, true]

function getMax(arr:Array<any>){
    let res = arr.reduce((a,b) => Math.max(a,b))
    return res
}
console.log(getMax(list2))