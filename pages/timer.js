import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { format } from 'date-fns'

export default function Home() {

    const periodTime = 60 * 25
    const shortPause = 60 * 5
    const longPause = 60 * 10

    const [customTime, setCustomTime] = useState(0)
    const [baseTime, setBaseTime] = useState(periodTime)
    const [timer, setTimer] = useState(baseTime);
    const [timeLeft, setTimeLeft] = useState(format(baseTime * 1000, 'mm:ss'));
    const [isActive, setIsActive] = useState(false);
    const [storeTimeOut, setStoreTimeOut] = useState(null);

    useEffect(() => {

    }, [timer])

    useEffect(() => {
        if (isActive && timer >= 0) {
            setStoreTimeOut(setTimeout(() => {
                setTimer(timer - 1)
                setTimeLeft(format(timer * 1000, 'mm:ss'))
            }, 1000))
        } else {
            clearTimeout(storeTimeOut)
        }
    }, [timer, isActive]);

    /*useEffect(() => {
        resetTime()
    }, [baseTime])*/

    useEffect(() => {
        if (customTime > 0) {
            let seconds = customTime * 60
            if (customTime == 60) seconds--
            setBaseTime(seconds)
        }
    }, [customTime])

    /*function resetTime() {
        setIsActive(false);
        setTimer(baseTime);
        setTimeLeft(format(baseTime * 1000, 'mm:ss'));
    }*/

    return (
        <div className={styles.container}>
            <Head>
                <title>Pomodoro:{timeLeft}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Hello Next</h1>
                <button onClick={() => setBaseTime(periodTime)}>25</button>
                <button onClick={() => setBaseTime(longPause)}>10</button>
                <button onClick={() => setBaseTime(shortPause)}>5</button>
                <input type="number" min="0" max="60"
                    onChange={e => setCustomTime(e.target.value)}
                    value={customTime} />
                <hr />
                <span>{timeLeft}</span>
                <hr />
                <button onClick={() => setIsActive(true)}>Start</button>
                <button onClick={() => setIsActive(false)}>Stop</button>
                
            </div>

        </div>
    )
}