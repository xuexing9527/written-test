const urls = [ 'url1', 'url2', 'url3', 'url4', 'url5', 'urls6', 'urls7' ]
const nums = 3

const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            parseInt(Math.random() * 10) % 2
                ? resolve({ code: 0, msg: `${url} 请求SUCCESS` })
                : reject({ code: 1, msg: `${url} 请求FAILER` })
        }, 1000)
    })
}

const fetchingUrls = []
// 每次并发n个请求，支持重试
while (urls.length) {
    const concurrentRequests = (urls, nums) => {
        console.log(urls)
        console.log('fetchingUrls', fetchingUrls)
        if (!urls.length) return
        if (fetchingUrls.length < nums) {
            const url = urls.pop()
            fetchingUrls.push(url)
            fetchUrl(url).then((req) => {
                console.log(20, url, req)
                fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
            }).catch(() => {
                fetchingUrls.splice(fetchingUrls.indexOf(url), 1)
                urls.push(url)
                console.log('catch', urls)
            })
        }
    }
    concurrentRequests(urls, nums)
}

// concurrentRequests(urls, 3)