const urls = [ 'url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8', 'url9' ]
const nums = 4

const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟成功与失败
            Math.random() < .5
            // Math.random() < 1
                ? resolve({ code: 0, msg: `${url} 请求SUCCESS` })
                : reject({ code: 1, msg: `${url} 请求FAILER` })
        }, 1000)
    })
}

const concurrentRequestRescursion = (urls, nums) => {
    // 并发池
    const threadPool = []

    // 递归，单一任务
    const recursionRequest = () => {
        // urls 长度为 0，退出递归
        if (!urls.length) return
        const url = urls.shift()

        threadPool.push(url) // 发送请求，放入并发池

        fetchUrl(url).then((req) => {
            threadPool.splice(threadPool.indexOf(url), 1) // 移出 并发池

            console.log(`请求成功的链接：${url}`, req)
            return recursionRequest()
        }).catch((e) => {
            threadPool.splice(threadPool.indexOf(url), 1) // 移出 并发池

            console.log(e)
            // 把 url 放回 urls，进行下次重试
            urls.unshift(url)
            return recursionRequest()
        })
    }

    // 首次启动
    // 注意：这里如果只启动一个，会导致线程池 单任务迭代 无法填满，所以要 并发启动
    for (let i = 0; i < nums; i += 1) {
        recursionRequest()
    }

    // 打印相关代码，与实现逻辑无关
    let timer = null
    timer = setInterval(() => {
        console.log('threadPool', threadPool)
        if (!threadPool.length) {
            clearInterval(timer)
            timer = null
        }
    }, 500)
}

concurrentRequestRescursion(urls, 3)