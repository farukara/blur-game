import Topbar from './topbar'
import LeftPanel from './leftpanel'
import styles from '../styles/Layout.module.css'
import { Box } from '@mui/material'
import { useEffect, useRef } from "react"

export default function Layout({children, binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity, setLeftPanelW, setTopPanelH}) {
    //get left panel dimensitions for bino positioning
    const leftPanelRef = useRef()
    const topPanelRef = useRef()
    useEffect (() => {
        setLeftPanelW(leftPanelRef.current.getBoundingClientRect().width)
    },[setLeftPanelW])
    useEffect (() => {
        setTopPanelH(topPanelRef.current.getBoundingClientRect().height)
    },[setTopPanelH])

    //update bino pos
    function mousemove (e) {
        setBinoPos({x:e.clientX, y:e.clientY})
    }

    return (
        <Box onMouseMove={ mousemove } className={ styles.container }>

            <Box 
                className={styles.topbar}
                ref={topPanelRef}
            >
                <Topbar />
            </Box>

            <Box className={styles.main}>
                {children}
            </Box>

            <Box 
                className={ styles.leftpanel }
                ref={leftPanelRef}
            >
                <LeftPanel binoPos={binoPos} binoSize={binoSize} clarity={clarity} setBinoPos={setBinoPos} setBinoSize={setBinoSize}  setClarity={setClarity} />
            </Box>

        </Box>
    )
}
