let preTime = 0
const jl = (cb, n) => {
    // n s内执行一次
    if (new Date().getTime() - preTime > n) {
        cb()
        preTime = new Date().getTime()
    }
}

setInterval(() => { jl(() => console.log(1), 2000) }, 500)