// const fetch = require('node-fetch'); // 需要安装 node-fetch 包，或者在浏览器环境中使用原生 fetch

// async function fetchUrl(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.text(); // 假设你需要获取响应的文本内容
//         return { url, data };
//     } catch (error) {
//         console.error(`Failed to fetch ${url}: ${error.message}`);
//         return { url, error: error.message }; // 返回带有错误信息的对象
//     }
// }
const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟成功与失败
            parseInt(Math.random() * 10) % 2
                ? resolve({ code: 0, msg: `${url} 请求SUCCESS` })
                : reject({ code: 1, msg: `${url} 请求FAILER` })
        }, 1000)
    })
}

async function fetchUrls(urls, chunkSize) {
    const results = [];
    const queue = [...urls];
    const activeRequests = [];

    async function processQueue() {
        while (queue.length > 0 && activeRequests.length < chunkSize) {
            console.log(queue)
            const url = queue.shift();
            const fetchPromise = fetchUrl(url).then(result => {
                console.log('activeRequests', activeRequests)
                // 从活跃请求列表中移除已完成的请求
                activeRequests.splice(activeRequests.indexOf(fetchPromise), 1);
                results.push(result);

                if (queue.length === 0 && activeRequests.length === 0) {
                    // 所有请求完成，处理结果
                    const failedUrls = results
                        .filter(result => result.error)
                        .map(result => result.url);

                    if (failedUrls.length > 0) {
                        console.log('Retrying failed URLs...');
                        fetchUrls(failedUrls, chunkSize); // 重试失败的URL
                    } else {
                        results.forEach(result => {
                            if (result.data) {
                                console.log(`Result from URL ${result.url}: ${result.data}`);
                            }
                        });
                        console.log('All requests completed');
                    }
                }
            });

            activeRequests.push(fetchPromise);
        }
    }

    processQueue();
}

// 示例URL列表
const urls = [
    'https://example.com/1',
    'https://example.com/2',
    'https://example.com/3',
    'https://example.com/4',
    'https://example.com/5',
    'https://example.com/6',
];

fetchUrls(urls, 3);
