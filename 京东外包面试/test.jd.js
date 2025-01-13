const str = 'abcdnik001xcd002acdij'

// 反转 str
const resver = (str) => {
    if (typeof str !== 'string') return ''
    let reStr = ''
    let len = str.length
    for (let i = len - 1; i > -1; i -= 1) {
        reStr += str[i]
    }
    return reStr
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