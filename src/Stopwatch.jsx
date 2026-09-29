import React from 'react'
import { useState, useEffect } from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(true)

    useEffect(() => {
        if (running) {
            const id = setInterval(() => {
                setTime(updatedTime => updatedTime + 1)
            }, 1000)

            return () => {
                clearInterval(id)
            }
        }
    }, [running])

    return (
        <div className="sw-screen">
            <div className="sw-card">
                <div className={`sw-dial ${running ? "sw-dial-running" : ""}`}>
                    <span className="sw-time">{time}</span>
                </div>
                <button
                    className={`sw-button ${running ? "sw-button-running" : "sw-button-paused"}`}
                    onClick={() => (setRunning(!running))}
                >
                    {running ? "Pause" : "Start"}
                </button>
            </div>
        </div>
    )
}

export default Stopwatch
