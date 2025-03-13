/**
 * 多次调用，指定时间 ms 内只触发一次
 * 
 */
const throttle = (callback, ms) => {
  // 定义一个上次调用时间
  let preTime = null
  return () => {
    // 大于 ms 才调用一次
    if (!preTime || new Date().getTime() - preTime > ms) {
      preTime = new Date().getTime()
      callback && callback()
    }
  }
}

const fun = throttle(() => console.log('触发...'), 1000)

setInterval(fun, 100)

/**
 * 节流场景
 * windows.onresize
 * 
 */