import React, { useEffect, useState, useRef, useCallback } from 'react';

// 秒杀，抢券
// 一进入页面就开始读秒

export const App = () => {
    const [ms, setMs] = useState(10)
    const timerRef = useRef(null)
 
    useEffect(() => {
        let finalMs = 10
        timerRef.current = setInterval(() => {
          console.log(finalMs)
            if (finalMs > 0) {
                finalMs -= 1
                setMs(finalMs)
            } else {
                clearInterval(timerRef.current)
                timerRef.current = null
            }
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
    }, [])

    // 放单个 card 里面
    const handleClick = useCallback(() => {
        if (ms > 0) return 

        setTimeout(() => {
            console.log('我参与抢购了...')
        }, 2000)

    }, [ms])

    return <div className="app" onClick={handleClick}>{ms === 0 ? '抢购' : `${ms}s`}</div>
}
