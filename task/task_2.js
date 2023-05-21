pastDate =  '01/01/2000'
currentDate = new Date()
let res = 0


for(let date =  new Date(pastDate);date<=currentDate ;date.setDate(date.getDate()+1)){
    if (date.getDate()===13 && date.getDay()===6){
    res+=1
}
}
console.log(res)