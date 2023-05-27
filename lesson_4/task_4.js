let arr = [1,2,3,4,5,6,7,89,9,0]

function rek(arr,length){
    console.log(arr[length])
    if (length <=0){
        return
    }
    else {
        rek(arr,length-1)
    }
}

rek(arr,arr.length)