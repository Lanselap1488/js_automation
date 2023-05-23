let sample = [1,1,true,false,'A','b','A']

function myFun(arr){
    let set = new Set(arr)
    return Array.from(set)

}

console.log(myFun(sample))
