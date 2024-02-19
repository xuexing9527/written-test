### 柯里化
````js
const currying = (() => {
    let arr = []
    const fn = (...args) => {
        arr = arr.concat(args)
        // 这里对参数进行集中处理
        console.log(arr)
        return (...innerArgs) => {
            return fn(...innerArgs)
        }
    }
    return fn
})()

currying(1)(2)(3)(4)
````