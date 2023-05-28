function getNum1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = Math.round(Math.random() * (5 - 1) + 1);
            resolve(res);
        }, 3000)
    })
}

function getNum2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = Math.round(Math.random() * (10 - 6) + 6);
            resolve(res);
        }, 5000)
    })
}

//асинхронная функция которая дожидается двух других функций возвращающих промис 
async function waitNumbers() {
    try {
        const result = await getNum2() + await getNum1()
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}

waitNumbers()

