function sorting(arr, type) {
    if (type === "+") {
        return arr.sort((a, b) => a - b)
    }
    if (type === "-") {
        return arr.sort((a, b) => b - a)
    }
    else {
        return arr
    }
}

console.log(sorting([1,4,6,3,7,99,12,0,2],"+"))