

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

// 浮点数，逗号
// nums, string
function formatNums(nums) {
    const numsStr = String(nums)
    // 88，222.22
    // 999，999.00
    // 9，999，999
    console.log('numStr: ', numsStr)

    // 小数点左边 ，每三个 ','
    // 或者没点，每三个加 ','

    // 倒着 遍历，从 . 或者 最后
    const doltIndex = numsStr.indexOf('.')

    // 从 尾部开始 index = len - 1
    const len = numsStr.length

    let priceString = ''
    if (doltIndex === -1) { // 整数
        for (let i = len - 1, r = 1; i > -1; i -= 1, r += 1) {
            priceString += numsStr[i]
            // 第三个的时候拼逗号
            if (r % 3 === 0 && r !== 1 && r !== len) {
                priceString += ','
            }
        }
        return resver(priceString)
    } else {
        // 截取 . 后的数字组 最后拼接
        const basePrice = numsStr.slice(0, doltIndex)
        const basePriceDoltPart = numsStr.slice(doltIndex)

        const len = basePrice.length
        for (let i = len - 1, r = 1; i > -1; i -= 1, r += 1) {
            priceString += basePrice[i]
            // 第三个的时候拼逗号
            if (r % 3 === 0 && r !== 1 && r !== len && i !== 0) {
                priceString += ','
            }
        }
        return resver(priceString) + basePriceDoltPart
    }
}


// 88，222.22
console.log(formatNums(88222.22))
// 9,888,222.22
console.log(formatNums(9888222.22))
// 89,888，222.22
console.log(formatNums(89888222.22))
// 999，999.00
console.log(formatNums(999999.00))
// 8，999，999
console.log(formatNums(8999999))
