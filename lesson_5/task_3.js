function getNum(){
    return new Promise(resolve=>{
        setTimeout(()=> {
            const random = Math.round(Math.random() * (5-1) +1);
            resolve(random);
        },1000)
    })
}

async function waitNum(){
    const res = await getNum()
    return  console.log(`Квадрат числа: ${res **2}`)
}

waitNum()