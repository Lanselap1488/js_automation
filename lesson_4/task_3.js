function fun(arr){
    res = arr.filter(x => x>0)
    return res.map(x => Math.sqrt(x))
}

console.log(fun([1, -2, 3, 0, 4, -5, 6, -11]))