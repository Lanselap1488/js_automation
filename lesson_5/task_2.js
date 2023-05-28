const prom1 = new Promise(resolve =>{
    setTimeout(()=> {
        resolve(1)
    },1000)
})

const prom2 = new Promise(resolve =>{
    setTimeout(()=> {
        resolve(2)
    },2000)
})

const prom3 = new Promise(resolve =>{
    setTimeout(()=> {
        resolve(3)
    },2000)
})
// выводим первый сработавший промис
Promise.race([prom1,prom2,prom3])
.then(data => console.log(data))