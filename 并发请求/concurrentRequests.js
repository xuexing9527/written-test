const urls = [ 'url1', 'url2', 'url3', 'url4', 'url5', 'urls6', 'urls7', 'urls8', 'urls9' ]
const nums = 3

const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟成功与失败
            Math.random() < .95
                ? resolve({ code: 0, msg: `${url} 请求SUCCESS` })
                : reject({ code: 1, msg: `${url} 请求FAILER` })
        }, 1000)
    })
}

const fetchingUrls = []
// 每次并发n个请求，支持重试
const concurrentRequests = (urls, nums) => {
    if (!urls.length) return
    let timer = null
    timer = setInterval(() => {
        if (fetchingUrls.length < nums) {
            const url = urls.shift()
            if (url) {
                fetchingUrls.push(url)
                fetchUrl(url).then((req) => {
                    console.log(`请求成功的url ${url}`, req)
                    fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
                }).catch(() => {
                    console.log(`请求失败的url ${url}`)
                    fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
                    urls.push(url)
                })

                console.log(`请求中的链接：${fetchingUrls}`)
            }
        }
        if (!urls.length && !fetchingUrls.length) {
            clearInterval(timer)
            timer = null
        }
    })
}

concurrentRequests(urls, 3)