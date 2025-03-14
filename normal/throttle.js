/**
 * 多次调用，指定时间 ms 内只触发一次
 * 
 */
const throttle = (callback, delay) => {
  // 定义一个上次调用时间
  let preTime = null
  return (...args) => {
    // 大于 delay 才调用一次
    if (!preTime || new Date().getTime() - preTime > delay) {
      preTime = new Date().getTime()
      callback && callback.apply(this, args)
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