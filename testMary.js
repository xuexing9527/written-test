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
console.log('script0');
setTimeout(function(){
     console.log('setTimeout0')
 }, 10);
setTimeout(function(){
     console.log('setTimeout3')
 }, -1);
setTimeout(function(){
     console.log('setTimeout4')
 }, 0);
setTimeout(function(){
    setTimeout(() => {
        Promise.resolve().then(function () {
            console.log('promise0');
        });
        console.log('setTimeout6')
    })
     console.log('setTimeout5')
     Promise.reject().catch(function() {
        console.log('promise-1')
     })
 }, 4);
 setTimeout(function() {
     console.log('setTimeout1')
     Promise.resolve().then(function() {
         console.log('promise0');
     });
 }, 0);
 new Promise(function(resolve) {
     console.log('promise1')
     for( var i=0 ; i<10000 ; i++ ) {
         i==9999 && resolve();
     }
 }).then(function() { // 这里做了什么？每次 promise.resove().then(cb) 的时候，先执行这里，在执行 cb 吗？
     console.log('promise2');
 });
 console.log('script1');

// 第1轮 
// stack: ['script1', 'promise1', 'script0'] 
// micro: ['promise2']
// macro: [s: (l_58, 10s), s: (l_67, 4s), s: (l_79, 0s), s: (l_64, 0s), s: (l_61, -1s)]
// s0, p1, s1, p2,

// 第2轮 stack: [s: (l_58, 10s), s: (l_67, 4s), s: (l_79, 0s), s: (l_64, 0s), s: (l_61, -1s)] => s: (l_61, -1s)
// stack: ['s3']
// micro: []
// macro: []

// 第3轮 stack: [s: (l_58, 10s), s: (l_67, 4s), s: (l_79, 0s), s: (l_64, 0s)] => s: (l_64, 0s)
// stack: ['s4']
// micro: []
// macro: []

// 第4轮 stack: [s: (l_58, 10s), s: (l_67, 4s), s: (l_79, 0s)] => s: (l_79, 0s)
// stack: ['s1']
// micro: ['p1','p2', 'p0']
// macro: []

// 第5轮 stack: [s: (l_58, 10s), s: (l_67, 4s)] => s: (l_67, 4s)
// stack: ['s5', '',]
// micro: ['p-1']
// macro: [s: (l_68, 0s)]

<<<<<<< HEAD
// 'promise0'
// 'promise2'


// setTimeout5:w

// setTimeout0


// 节流的使用场景？
=======
// 第6轮 stack: [s: (l_58, 10s), s: (l_67, 4s)] => s: (l_67, 4s)
// stack: []
// micro: []
// macro: []

////// 这样也不行。如何想个办法，能无限的迭代下去又不觉得劳累思维呢？？？
>>>>>>> 5a1aa68a254386b440ea1a429243e8a305f74043
