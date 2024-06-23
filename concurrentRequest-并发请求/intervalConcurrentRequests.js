const urls = [ 'url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8', 'url9' ]
const nums = 3

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

// 每次并发n个请求，支持重试
// 定时器版本
const concurrentRequests = (urls, nums) => {
    const fetchingUrls = []
    let timer = null
    timer = setInterval(() => {
        if (fetchingUrls.length < nums) {
            const url = urls.shift()
            if (url) {
                fetchingUrls.push(url)
                fetchUrl(url).then((req) => {
                    console.log(`请求成功的链接 ${url}`, req)
                    fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
                }).catch((e) => {
                    console.log(`请求失败的链接 ${url}`, e)
                    fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
                    urls.unshift(url)
                })
                console.log(`请求中的链接：`, fetchingUrls)
            }
        }
        if (!urls.length && !fetchingUrls.length) {
            clearInterval(timer)
            timer = null
        }
    })
}

concurrentRequests(urls, 3)