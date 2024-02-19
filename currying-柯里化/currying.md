### 柯里化
````js
const currying = (() => {
    let arr = []
    const fn = (...args) => {
        arr = arr.concat(args)
        console.log(arr)
        return (...innerArgs) => {
            return fn(...innerArgs)
        }
    }
    return fn
})()
````