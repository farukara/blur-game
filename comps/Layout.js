import Topbar from './topbar'
import LeftPanel from './leftpanel'
import styles from '../styles/Layout.module.css'
import { Box } from '@mui/material'

export default function Layout({children, binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    function mousemove (e) {
        setBinoPos({x:e.clientX, y:e.clientY})
    }
    return (
        <Box onMouseMove={mousemove} className={styles.container}>

            <Box className={styles.topbar}>
                <Topbar />
            </Box>

            <Box className={styles.main}>
                {children}
            </Box>

            <Box className={styles.leftpanel}>
                <LeftPanel binoPos={binoPos} binoSize={binoSize} clarity={clarity} setBinoPos={setBinoPos} setBinoSize={setBinoSize}  setClarity={setClarity} />
            </Box>

        </Box>
    )
}
