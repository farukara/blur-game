import Image from 'next/image'
import styles from '../styles/Main.module.css'
import React, {useState, useEffect, useRef} from 'react'

export default function Main({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    const blurRef = useRef()
    let mainPos = {top:0, bottom:0, left:0, right:0}
    /* let topPanelPos = {top:0, bottom:0, left:0, right:0}
    let leftPanelPos = {top:0, bottom:0, left:0, right:0} */
    /* topPanelPos = blurRef.current.getBoundingClientRect()
    leftPanelPos = blurRef.current.getBoundingClientRect() */
    if (blurRef.current) {
        mainPos = blurRef.current.getBoundingClientRect()
    }
    console.log(mainPos.top, mainPos.right, mainPos.bottom, mainPos.left);

    useEffect(() => {
        blurRef.current.style.backdropFilter = `blur(${clarity}px)`
        blurRef.current.style.webkitBackdropFilter = `blur(${clarity}px)`
    },[clarity])
    useEffect(() => {
        console.log(blurRef.current.style)
        blurRef.current.style.maskImage = `${binoSize}px at 50% 50%, transparent 50%, black 50%)`
        blurRef.current.style.webkitMaskImage = `${binoSize}px at 50% 50%, transparent 50%, black 50%)`
    },[binoSize])
    useEffect(() => {
        blurRef.current.style.transform = `translate(${binoPos.x-200}px, ${binoPos.y}px)`
    },[binoPos.x, binoPos.y])

    return (
    <div className={styles.container}>
        <div className={styles.canvas}>
        </div>
        <div className={styles.blur} ref={blurRef}>
        </div>
    </div>
    )
}
