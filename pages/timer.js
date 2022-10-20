import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/timer.module.css'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

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

    useEffect(() => {
        if (customTime > 0) {
            let seconds = customTime * 60
            if (customTime == 60) seconds--
            setBaseTime(seconds)
        }
    }, [customTime])

    const router = useRouter();


    return (

        <div className={styles.background}>
            <Head>
                <title className={styles.timer}>Pomodoro:{timeLeft}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div className={styles.divButtons}>

                    <h1>BANADORA</h1>


                    <div className={styles.timer}>
                        <span className={styles.timer}>{timeLeft}</span>
                    </div>

                    <button className={styles.actionButtons} onClick={() => setIsActive(true)}>Start</button>
                    <button className={styles.actionButtons} onClick={() => setIsActive(false)}>Stop</button>

                    <button
                        className={styles.actionButtons}
                        onClick={() => router.push("/")}>Go Back</button>

                </div>

            </div>

        </div>
    )
}