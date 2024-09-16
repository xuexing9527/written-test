// 1.throttle 节流函数和 debounce 防抖函数的区别？如何实现？

// ● 节流函数
// 频率控制，返回函数连续调用时，action 执行频率限定为 1次 / delay
// 限制一个函数在一定时间内只能执行一次。
// let state = false
// let t2 = null
// const throttle = (callback, n) => {

//   // state 是否执行
//   // n 时间间隔

//   if (!state) {
//     clearTimeout(t2)
//     t2 = null
//     t2 = setTimeout(() => {
//       callback()
//       state = true
//     }, n)
//   } else {
//     state = false
//   }
// }

// ● 防抖函数
// 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
// 函数防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
// 简单的说，当一个动作连续触发，则只执行最后一次。

// let timer = null


// const debounce = (callback, n, idle) {
//   // 空闲时间
//   const time = new Date().getTime()
  
//   if (timer) {
//    // // 有 timer 才会有 idle 判断
//    // if (new Date().getTime() - time < idle) {
//    //   return
//    // }

//     clearTimeout(timer)
//   }

//   timer = setTimeout(() => {
//     callback()
//   }, n)

// }





// // 写出打印顺序
// console.log('script0');
//  setTimeout(function(){
//      console.log('setTimeout0')
//  }, 10);
// setTimeout(function(){
//      console.log('setTimeout3')
//  }, -1);
// setTimeout(function(){
//      console.log('setTimeout4')
//  }, 0);
// setTimeout(function(){
//      console.log('setTimeout5')
//  }, 4);
//  setTimeout(function() {
//      console.log('setTimeout1')
//      Promise.resolve().then(function() {
//          console.log('promise0');
//      });
//  }, 0);
//  new Promise(function(resolve) {
//      console.log('promise1')
//      for( var i=0 ; i<10000 ; i++ ) {
//          i==9999 && resolve();
//      }
//  }).then(function() {
//      console.log('promise2');
//  });
//  console.log('script1');

// ['setTimeout0 => 10s', 'setTimeout3 => -1s', 'setTimeout4 => 0', ''setTimeout5 => 4s', ' console.log('setTimeout1') => 0s']


// script0
// 'promise1'
// 'script1'


// setTimeout3
// setTimeout4
// setTimeout1

// 'promise0'
// 'promise2'


// setTimeout5:w

// setTimeout0


// 节流的使用场景？
