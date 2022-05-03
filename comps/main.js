import Image from 'next/image'
import styles from '../styles/Main.module.css'
import React, {useState, useEffect, useRef} from 'react'

export default function Main({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity, leftPanelW, topPanelH}) {
    const blurRef = useRef()

    //adjust blur
    useEffect(() => {
        blurRef.current.style.backdropFilter = `blur(${clarity/10}px)`
        blurRef.current.style.webkitBackdropFilter = `blur(${clarity/10}px)`
    },[clarity])

    //adjust binoSize
    useEffect(() => {
        blurRef.current.style.maskImage = `radial-gradient(${binoSize}px at 50% 50%, transparent 50%, black 50%)`
        blurRef.current.style.webkitMaskImage = `radial-gradient(${binoSize}px at 50% 50%, transparent 50%, black 50%)`
    },[binoSize])

    //adjust binoPos
    useEffect(() => {
        blurRef.current.style.transform = `translate(${binoPos.x - leftPanelW - binoSize}px, ${binoPos.y - topPanelH - binoSize}px)`
    },[binoPos.x, binoPos.y, leftPanelW, topPanelH, binoSize])

    //timer for blur and clarity
    useEffect(() => {
        const timer = setInterval(()=> {
            setBinoSize(p => p+1)
            setClarity(p => p-1)
        },3000)
        return () => {
            clearInterval(timer)
        }
    }, [setBinoSize, setClarity])

    return (
    <div className={styles.container}>
        <div className={styles.canvas}>
        </div>
        <div className={styles.blur} ref={blurRef}>
        </div>
    </div>
    )
}
