const str = 'abcdnik001xcd002acdij'

// 反转 str
const resver = (str) => {
    if (typeof str !== 'string') return ''
    /**
     * 字符串拼接
     * 频繁重新分配内存与复制内容增加了 常数时间开销
     * 在大 O 表示法中，O(1) 表示操作的执行时间与输入规模无关，属于常数时间。
     * 常数时间开销 具体指的是一个操作所需的固定执行时间，它是时间复杂度分析中的基准。
     * 
     * 隐藏常数因子：复杂度分析中，隐藏的常数（如 𝑐 ⋅ 𝑛 c⋅n 中的 𝑐 c）如何影响实际性能。
     * 比如文件 I/O 的一个 read 操作，尽管理论上是 𝑂 (1) O(1)，但实际时间受系统环境影响较大。
     * 
     * 操作拼接字符串，内存分配会导致性能下降。因为字符串是不可变的，需要重新赋值去改变，分配内存。
     * 
     */
    let reStr = ''
    let len = str.length
    for (let i = len - 1; i > -1; i -= 1) {
        reStr += str[i]
    }
    return reStr
}

const resver2 = (str) => {
    try {
        if (typeof str !== 'string') return ''
        return str.split('').resver().toString()
    } catch (e) {
        return ''
    }
}

// 找到最后一组数字字符串，放到开头。
function handleStr(str) {
    // 找最后连续的数字 
    const arr = str.match(/(\d+)/g) || []
    const lastNums = arr[arr.length - 1]

    // 1. 反转截取，再翻回来
    // const str = 'abcdnik001xcd002acdij'
    // lastNums 反转，截取

    // 反转后
    const reLastNums = resver(lastNums)
    const reStr = resver(str)

    // 截取位的下标
    const index = reStr.indexOf(reLastNums)

    const handledReStr = reStr.slice(0, index) + reStr.slice(index + reLastNums.length)
    const targetStr = lastNums + resver(handledReStr)
    return targetStr
} 

console.log(handleStr(str))